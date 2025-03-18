import ChatMessageList from "../components/ui/chat-message-list";
import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: "1", content: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: Date.now().toString(), content: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 border p-4 rounded-lg shadow">
      <ChatMessageList messages={messages} />
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 border rounded-l p-2"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
