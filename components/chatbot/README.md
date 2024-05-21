# Reusable Chatbot System

This is a reusable chatbot system that can be used in any project. It is built using Next.js, and designed to be easilly integrated with any OpenAI model.  

## Overview

The chatbot system consists of a react component that can be used to render the chatbot interface, logic for keeping chatbot state, a hook that can be used to interact with the chatbot, as well as server side code that can be used to interact with the OpenAI API.

## Components and Hooks

### `Chatbot.js` 

A react component that renders the chatbot interface. It uses the `useChatbot` hook to interact with the chatbot.

### `useChatbot`

A custom hook that provides access to chatbot functionality, including sending messages to the chatbot and receiving responses.

### 'chatApi.js'

A server side function that can be used to interact with the OpenAI API. It "determines if the user is allowed to interact with the chatbot", and interfaces with the OpenAI API to generate responses.


## Features that need to be added before this can be used in production

- Add a system to track user sessions and IP adress information to ensure that API costs are kept below a certain threshold, preventing abuse and high costs
- Basic way to customize the chatbot with specific information about whatever application it is being used in, and have to have it refuse to answer unrelated questions

## Potential Future Features

- Add support for more types of chatbots (less powerful, but cheaper to run)
- Add a tool for fine tuning the chatbot to the specific needs of the application
- Add a context provider that can be used to give the chatbot access to specific data across the application (example: a user wants to know about a specific product or page they are looking at, the chatbot can access the page data and provide information about it)

