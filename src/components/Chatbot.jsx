import React, { useState } from "react";
import ChatMessageList from "../components/ui/chat-message-list";
import Input  from "../components/ui/input";
import  Button  from "../components/ui/button";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message to the chat
    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);

    // Simulate chatbot response (Replace with AI logic later)
    setTimeout(() => {
      const botMessage = { role: "bot", content: "Hello! How can I assist you?" };
      setMessages([...messages, newMessage, botMessage]);
    }, 1000);

    setInput(""); // Clear input field
  };

  return (
    <div className="flex flex-col w-full h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto border p-2">
        <ChatMessageList>
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 rounded ${msg.role === "user" ? "bg-blue-300" : "bg-green-300"}`}>
              {msg.content}
            </div>
          ))}
        </ChatMessageList>
      </div>

      <div className="flex gap-2 mt-2">
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
}
