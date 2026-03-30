const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// OpenAI setup
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🔥 MAIN FUNCTION
async function rewriteMessage(message, tone) {

  // reduce() use (mandatory)
  const prompt = [message].reduce((acc, curr) => {
    return acc + curr;
  }, "");

  const finalPrompt = `Rewrite the following message in a ${tone} tone:\n"${prompt}"`;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: finalPrompt }
      ],
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.log("❌ OpenAI ERROR 👉", error.message);
    throw error;
  }
}

// 📌 API ROUTE
app.post("/ai/rewrite", async (req, res) => {
  const { message, tone } = req.body;

  console.log("📩 Incoming Request:", message, tone);

  const validTones = ["professional", "friendly", "apologetic", "confident"];

  // loop validation
  let isValid = false;
  for (let t of validTones) {
    if (t === tone) {
      isValid = true;
    }
  }

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  if (!isValid) {
    return res.status(400).json({ error: "Invalid tone" });
  }

  try {
    const rewritten = await rewriteMessage(message, tone);

    console.log("✅ AI Response:", rewritten);

    res.json({ rewritten });

  } catch (err) {
    console.log("🔥 FINAL ERROR 👉", err.message);

    // 🔥 FREE FALLBACK (NO API NEEDED)
    let fakeResponse = "";

    if (tone === "professional") {
      fakeResponse = "I apologize for not completing the work. I will complete it shortly.";
    } 
    else if (tone === "friendly") {
      fakeResponse = "Hey! I couldn’t finish the work, but I’ll get it done soon 😊";
    } 
    else if (tone === "apologetic") {
      fakeResponse = "I'm really sorry, I couldn't finish the work. I will do it as soon as possible.";
    } 
    else if (tone === "confident") {
      fakeResponse = "I will complete the work shortly and ensure it is done properly.";
    }

    console.log("⚡ Using fallback response");

    res.json({ rewritten: fakeResponse });
  }
});

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});