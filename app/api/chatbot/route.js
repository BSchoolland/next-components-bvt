'use server';
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

class ChatAPI {
    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY;
        this.endpoint = "https://api.openai.com/v1/chat/completions";
    }

    async sendMessage(message) {
        // Send the user's message to the chatbot and receive a response
        const response = await this.fetchGPTResponse(message);

        // You can process the response or perform any additional actions here
        // For example, extracting the text from the response:
        const textResponse = response.choices[0].message.content;

        // Return the response to the caller
        return textResponse;
    }

    async fetchGPTResponse(message) {
        try {
            const response = await fetch(this.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: message }],
                }),
            });

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return {
                choices: [{ message: { content: "An error has occured" } }],
            };
        }
    }
}

// /pages/api/your-api-endpoint.js

import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        if (req.method === 'POST') {
          try {
            const body = await req.json();
            console.log(body)
            const userMessage = body.message;
            const api = new ChatAPI();
            const botMessage = await api.sendMessage(userMessage);
            console.log(botMessage);
            const response = {
                message: botMessage
            }
            return NextResponse.json(response, { status: 200 });
          } catch (error) {
            console.error(error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
          }
        } else {
          res.setHeader('Allow', ['POST']);
          res.status(405).end(`Method ${req.method} Not Allowed`);
        }
        // Return the response
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}







  // saved code
