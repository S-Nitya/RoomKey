import React, { useState } from "react";
import "./Chatbot.css";

const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
const API_KEY = "AIzaSyAaIF83C6gCbcZe6BTUPfT0ohxhoYCAQTk"; // ← put your key here

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m DormBot! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `You are DormBot, a dormitory assistant. Answer clearly.\n\nUser: ${input}` }],
            },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn’t fetch a dorm response.";

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error: failed to fetch dorm response." },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbox">
          {/* Header */}
          <div className="chatbox-header">
            <span>🏠 DormBot</span>
            <button className="close-btn" onClick={toggleChat}>
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="chatbox-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                <div className="avatar">
                  {msg.sender === "bot" ? "🤖" : "🧑"}
                </div>
                <div className="bubble">{msg.text}</div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chatbox-input">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button className="chatbot-button" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
}

export default Chatbot;
