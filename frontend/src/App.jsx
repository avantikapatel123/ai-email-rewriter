

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [tone, setTone] = useState("professional");
//   const [output, setOutput] = useState("");

//   const tones = ["professional", "friendly", "apologetic", "confident"];

//   const handleRewrite = async () => {
//     if (!message) {
//       alert("Please enter a message 😅");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/ai/rewrite", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message, tone }),
//       });

//       const data = await res.json();
//       setOutput(data.rewritten);
//     } catch (err) {
//       setOutput("⚠️ Something went wrong!");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>✨ AI Email Rewriter</h1>

//       <textarea
//         placeholder="Type your message here..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />

//       <select onChange={(e) => setTone(e.target.value)}>
//         {tones.map((t, index) => (
//           <option key={index}>{t}</option>
//         ))}
//       </select>

//       <button onClick={handleRewrite}>Rewrite ✨</button>

//       {output && (
//         <div className="output-box">
//           <h3>Rewritten Message:</h3>
//           <p>{output}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [tone, setTone] = useState("professional");
//   const [output, setOutput] = useState("");

//   const tones = ["professional", "friendly", "apologetic", "confident"];

//   const handleRewrite = async () => {
//     if (!message) {
//       alert("Please enter a message 😅");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/ai/rewrite", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message, tone }),
//       });

//       const data = await res.json();
//       setOutput(data.rewritten);
//     } catch (err) {
//       setOutput("⚠️ Something went wrong!");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>✨ AI Email Rewriter</h1>

//       <textarea
//         placeholder="Type your message here..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />

//       <select onChange={(e) => setTone(e.target.value)}>
//         {tones.map((t, index) => (
//           <option key={index}>{t}</option>
//         ))}
//       </select>

//       <button onClick={handleRewrite}>Rewrite ✨</button>

//       {output && (
//         <div className="output-box">
//           <h3>Rewritten Message:</h3>
//           <p>{output}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("professional");
  const [output, setOutput] = useState("");

  const tones = ["professional", "friendly", "apologetic", "confident"];

  const handleRewrite = async () => {
    if (!message) {
      alert("Please enter a message 😅");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/ai/rewrite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, tone }),
      });

      const data = await res.json();
      setOutput(data.rewritten);
    } catch (err) {
      setOutput("⚠️ Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h1>✨ AI Email Rewriter</h1>

      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <select onChange={(e) => setTone(e.target.value)}>
        {tones.map((t, index) => (
          <option key={index}>{t}</option>
        ))}
      </select>

      <button onClick={handleRewrite}>Rewrite ✨</button>

      {output && (
        <div className="output-box">
          <h3>Rewritten Message:</h3>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}

export default App;