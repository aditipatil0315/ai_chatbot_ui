import React, { useState } from "react";
import ChatMessageList from "../components/ui/chat-message-list";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", content: input, time: getCurrentTime() };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const botMessage = {
        role: "bot",
        content: "Hello! How can I assist you?",
        time: getCurrentTime(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col w-full h-screen p-4 bg-gray-100">
      {/* Heading */}
      <h2 className="text-center text-xl font-bold mb-4">AI-Chatbot</h2>

      <div className="flex-1 overflow-y-auto border p-2">
        <ChatMessageList>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* AI Profile Icon */}
              {msg.role === "bot" && (
                <div className="w-8 h-8 bg-green-700 text-white flex items-center justify-center rounded-full">
                  A
                </div>
              )}

              {/* Message Bubble + Timestamp (Improved Spacing & Width) */}
              <div className="flex flex-col">
              <div
  className={`p-3 rounded-lg text-sm leading-tight ${
    msg.role === "user"
      ? "bg-black text-white self-end"
      : "bg-gray-300 text-black self-start"
  }`}
  style={{
    width: "fit-content"
  }}
>
  {msg.content}
</div>

                {/* Timestamp (Aligned Below Message) */}
                <span
                  className={`text-xs text-gray-500 mt-1 ${
                    msg.role === "user" ? "self-end text-right" : "self-start text-left"
                  }`}
                >
                  {msg.time}
                </span>
              </div>

              {/* User Profile Icon */}
              {msg.role === "user" && (
                <div className="w-8 h-8 bg-blue-700 text-white flex items-center justify-center rounded-full">
                  U
                </div>
              )}
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

// Function to get current time in HH:MM AM/PM format
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
  return `${hours}:${minutes} ${ampm}`;
}
