function abc() {
    let message = document.getElementById("user-message");
    let list = document.getElementById("chat-messages");

    // Display user's message
    list.innerHTML += `<div class="chat-message user">
                        <p>${message.value}</p>
                    </div>`;

    let lowerMessage = message.value.toLowerCase();

    // Bot responses based on message
    if (lowerMessage === "hello" || lowerMessage === "hello!") {
        list.innerHTML += `<div class="chat-message bot">
                            <p>Bot: Hi, How are you?</p>
                        </div>`;
    } else if (lowerMessage === "how are you?" || lowerMessage === "how are you") {
        list.innerHTML += `<div class="chat-message bot">
                            <p>Bot: I'm doing well, thank you for asking!</p>
                        </div>`;
    } else if (lowerMessage === "bye" || lowerMessage === "goodbye") {
        list.innerHTML += `<div class="chat-message bot">
                            <p>Bot: Goodbye! Have a great day!</p>
                        </div>`;
    } else {
        list.innerHTML += `<div class="chat-message bot">
                            <p>Bot: I'm sorry, I didn't quite understand that.</p>
                        </div>`;
    }

    // Clear the input field after sending the message
    message.value = "";
}
