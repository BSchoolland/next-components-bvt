'use client';
import React from 'react';
import Chatbot from '@/components/chatbot'

const Page = () => {
  return (
    <div className="demo"> 
        <h1>Chatbot Demo</h1>
        <a href="/">Back to Home</a>
        <Chatbot />
    </div>
  );
};

export default Page;
