// simple rule-based chatbot
const readline = require('readline');  

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const responses = {
    "hello": "Hello! How can I help you?",
    "how are you": "I'm an AI, I don't have feelings, but thanks for asking!",
    "bye": "Goodbye!"
};

rl.setPrompt("You: ");
rl.prompt();

rl.on('line', (input) => {
    const response = responses[input.toLowerCase()] || "Sorry, I don't understand.";
    console.log("Bot:", response);
    if (input.toLowerCase() === "bye") rl.close();
    else rl.prompt();
});
