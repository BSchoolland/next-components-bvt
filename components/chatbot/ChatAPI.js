class ChatAPI {
  constructor() {
    // Initialize any necessary variables or configurations
  }

  async sendMessage(message) {
    // Send the user's message to the chatbot and receive a response
    const response = await this.echoMessage(message);

    // Process the response or perform any additional actions
    // ...

    // Return the response to the caller
    return response;
  }

  async echoMessage(message) {
    // echo the message back to the user
    return `User said ${message}`;
  }
}

module.exports = ChatAPI;
