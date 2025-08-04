document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('messageInput');
    const buttonElement = document.getElementById('sendButton');

    buttonElement.addEventListener('click', () => {
        // Ao clicar no botão, limpa o valor do input
        inputElement.value = '';
    });
});

const chatDiv = document.querySelector('.chat');
const input = chatDiv.querySelector('input');

input.addEventListener('focus', () => {
    chatDiv.classList.add('focused');
});

input.addEventListener('blur', () => {
    chatDiv.classList.remove('focused');
});
