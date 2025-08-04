document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('messageInput');
    const buttonElement = document.getElementById('sendButton');
    const chatMessages = document.querySelector('.chat-messages');
    const chatDiv = document.querySelector('.chat');

    buttonElement.addEventListener('click', () => {
        const messageText = inputElement.value.trim();
        if (messageText === '') return;

        // Cria o container da mensagem
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');

        // Cria o span do nome
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        nameSpan.textContent = 'lucas:';

        // Cria o span da mensagem
        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.textContent = messageText;

        // Junta no container da mensagem
        messageDiv.appendChild(nameSpan);
        messageDiv.appendChild(textSpan);

        // Adiciona a mensagem no container
        chatMessages.appendChild(messageDiv);

        // Limpa o input
        inputElement.value = '';

        // Scrolla para baixo automaticamente
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    // Para manter fundo cinza enquanto digitando
    inputElement.addEventListener('focus', () => {
        chatDiv.classList.add('focused');
    });
    inputElement.addEventListener('blur', () => {
        chatDiv.classList.remove('focused');
    });
});
