import React, { useState } from "react";
import ChatMessageList from "../components/ui/chat-message-list";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const botMessage = { role: "bot", content: "Hello! How can I assist you?" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput(""); 
  };

  return (
    <div className="flex flex-col w-full h-screen p-4 bg-gray-100">
      {/* Heading */}
      <h2 className="text-center text-xl font-semibold mb-4">AI-Chatbot</h2>

      <div className="flex-1 overflow-y-auto border p-2">
        <ChatMessageList>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md max-w-[75%] ${
                msg.role === "user" ? "bg-black text-white self-end" : "bg-gray-300 text-black self-start"
              }`}
              style={{ width: "fit-content" }}
            >
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
