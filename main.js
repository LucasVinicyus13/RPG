document.addEventListener('DOMContentLoaded', () => {
    const inputEl = document.getElementById('messageInput');
    const btnEl   = document.getElementById('sendButton');
    const msgsEl  = document.querySelector('.chat-messages');
    const chatEl  = document.querySelector('.chat');

    function addMessage(text) {
        if (!text.trim()) return;

        const msg = document.createElement('div');
        msg.className = 'chat-message';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = 'lucas: ';

        const textSpan = document.createElement('span');
        textSpan.className = 'text';
        textSpan.textContent = text;

        msg.append(nameSpan, textSpan);
        // adiciona no topo da pilha reversa
        msgsEl.prepend(msg);

        // scroll automático: mantém o scroll embaixo
        msgsEl.scrollTop = msgsEl.scrollHeight;

        // faz sumir após 8 segundos
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

    // mantém fundo cinza enquanto digita (caso use foco)
    inputEl.addEventListener('focus', () => chatEl.classList.add('focused'));
    inputEl.addEventListener('blur',  () => chatEl.classList.remove('focused'));
});
