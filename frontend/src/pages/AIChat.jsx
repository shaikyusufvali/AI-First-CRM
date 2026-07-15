import { useState } from "react";
import axios from "axios";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/ai/chat",
        {
          message: message,
        }
      );

      setResponse(res.data.llm);
    } catch (err) {
      console.log(err);
      alert("AI Server Error");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>🤖 AI Interaction Assistant</h2>

      <textarea
        rows={6}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
        placeholder="Type HCP interaction..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      {/* AI Tools */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() =>
            setMessage("Log this HCP interaction")
          }
        >
          Log Interaction
        </button>

        <button
          onClick={() =>
            setMessage("Edit the last interaction")
          }
        >
          Edit Interaction
        </button>

        <button
          onClick={() =>
            setMessage("Summarize this meeting")
          }
        >
          Summarize
        </button>

        <button
          onClick={() =>
            setMessage(
              "Extract doctor, hospital and product"
            )
          }
        >
          Extract Entities
        </button>

        <button
          onClick={() =>
            setMessage(
              "Recommend next sales action"
            )
          }
        >
          Next Action
        </button>
      </div>

      <button
        onClick={sendMessage}
        style={{
          padding: "12px 30px",
          cursor: "pointer",
        }}
      >
        Send
      </button>

      <br />
      <br />

      <h3>AI Response</h3>

      <div
        style={{
          background: "#f3f3f3",
          padding: "20px",
          borderRadius: "10px",
          minHeight: "120px",
        }}
      >
        {response}
      </div>
    </div>
  );
}