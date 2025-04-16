"use client";

import React, { useState } from "react";

export default function BrainstormingChat() {
  const [messages, setMessages] = useState([
    { sender: "User", text: "hi" },
    { sender: "Assistant", text: "Hello! How can I assist you today?" },
    { sender: "User", text: "how are you doing today?" },
    { sender: "Assistant", text: "I'm here and ready to assist you! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "User", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "Assistant", text: "Got it! Let me think..." }]);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="bg-white rounded shadow p-4 space-y-4">
      <h2 className="text-2xl font-semibold flex items-center">
        <span role="img" aria-label="chat">💬</span> Brainstorming Chat
      </h2>
      <div className="space-y-2 max-h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded shadow-sm ${
              msg.sender === "User"
                ? "bg-blue-50 border-l-4 border-blue-500"
                : "bg-gray-50 border-l-4 border-green-500"
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Ask a question or share an idea</h3>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Type your question or idea here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="w-full bg-white border p-2 rounded hover:bg-gray-200"
        >
          Send
        </button>
      </div>
      <button
        onClick={clearChat}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        🗑️ Clear Chat
      </button>
    </div>
  );
}
