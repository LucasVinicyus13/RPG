document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('messageInput');
    const buttonElement = document.getElementById('sendButton');

    buttonElement.addEventListener('click', () => {
        // Ao clicar no botão, limpa o valor do input
        inputElement.value = '';
    });
});
