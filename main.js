document.addEventListener('DOMContentLoaded', () => {
    const inputEl = document.getElementById('messageInput');
    const btnEl   = document.getElementById('sendButton');
    const msgsEl  = document.querySelector('.chat-messages');

    function addMessage(text) {
        if (!text.trim()) return;

        const msg = document.createElement('div');
        msg.className = 'chat-message';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = 'lucas: ';

        const textSpan = document.createElement('span');
        textSpan.textContent = text;

        msg.append(nameSpan, textSpan);
        msgsEl.prepend(msg);

        // Mensagem some depois de 8 segundos
        setTimeout(() => {
            msg.style.opacity = '0';
            setTimeout(() => msg.remove(), 500);
        }, 8000);
    }

    btnEl.addEventListener('click', () => {
        addMessage(inputEl.value);
        inputEl.value = '';
        inputEl.focus();
    });

    inputEl.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            addMessage(inputEl.value);
            inputEl.value = '';
        }
    });
});
