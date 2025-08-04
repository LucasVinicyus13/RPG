document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('messageInput');
    const buttonElement = document.getElementById('sendButton');
    const chatDiv = document.querySelector('.chat');
    const messageContainer = chatDiv.querySelector('.chat-messages');

    function addMessage(text) {
        if (!text.trim()) return; // ignora mensagens vazias

        const msgEl = document.createElement('div');
        msgEl.classList.add('chat-message');
        msgEl.textContent = text;

        messageContainer.appendChild(msgEl);
        messageContainer.scrollTop = messageContainer.scrollHeight; // scroll automático
    }

    buttonElement.addEventListener('click', () => {
        const message = inputElement.value;
        addMessage(message);
        inputElement.value = '';
    });

    inputElement.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = inputElement.value;
            addMessage(message);
            inputElement.value = '';
        }
    });

    inputElement.addEventListener('focus', () => {
        chatDiv.classList.add('focused');
    });

    inputElement.addEventListener('blur', () => {
        chatDiv.classList.remove('focused');
    });
});
