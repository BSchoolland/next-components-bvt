// Components using the ChatAPI
import React, { useState } from "react";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target[0].value;
    if (!message.trim()) return; // Prevent sending empty messages
    const updatedChatHistory = [...chatHistory, "User: " + message];
    setChatHistory(updatedChatHistory); // Update the chat history optimistically
    e.target.reset();

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // const { answer } = await response.json();
      const jsonResponse = await response.json()
      const answer = jsonResponse.message
      setChatHistory(prevHistory => [...prevHistory, "Chatbot: " + answer]);
    } catch (error) {
      console.error("Failed to fetch:", error.message);
    }
    
  };

  return (
    <div>
      {chatHistory.map((message, index) => (
        <div key={index}>{message}</div>
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatbot;
