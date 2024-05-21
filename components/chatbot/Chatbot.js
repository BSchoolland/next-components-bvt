import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import ChatAPI from "./ChatAPI";
function Chatbot() {
  // Chat history
  const [chatHistory, setChatHistory] = useState([]);
  const api = new ChatAPI();
  // Form for submitting messages
  const handleSubmit = async (e) => {
    e.preventDefault();
    // get the user's message from the form
    const message = e.target[0].value;
    // update the chat history with the user's message
    setChatHistory([...chatHistory, "User: " + message]);
    e.target.reset();
    // obtain the chatbot's response from the serverside api
    const chatbotResponse = await api.sendMessage(message);
    // post the chatbot's response in the history
    setChatHistory([...chatHistory, "User: " + message, "Chatbot: " + chatbotResponse]);
  };

  return (
    <div>
      {/* Render chat history */}
      {chatHistory.map((message, index) => (
        <div key={index}>{message}</div>
      ))}

      {/* Form for submitting messages */}
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
      
    </div>
  );
}

export default Chatbot;