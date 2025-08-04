document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('messageInput');
    const buttonElement = document.getElementById('sendButton');
    const chatMessages = document.querySelector('.chat-messages');
    const chatDiv = document.querySelector('.chat');

    buttonElement.addEventListener('click', () => {
        const messageText = inputElement.value.trim();
        if (messageText === '') return;

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        nameSpan.textContent = 'lucas: ';

        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.textContent = messageText;

        messageDiv.appendChild(nameSpan);
        messageDiv.appendChild(textSpan);

        chatMessages.appendChild(messageDiv);

        // Scroll para a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;

        inputElement.value = '';
        inputElement.focus();
    });

    inputElement.addEventListener('focus', () => {
        chatDiv.classList.add('focused');
    });

    inputElement.addEventListener('blur', () => {
        chatDiv.classList.remove('focused');
    });
});
