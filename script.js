document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttons');
    const popup = document.getElementById('popup');
    const messageElement = document.getElementById('message');
    const closeBtn = document.getElementById('close');

    const messages = Array.from({ length: 100 }, (_, i) => `Message for button ${i + 1}`);

    for (let i = 1; i <= 100; i++) {
        const button = document.createElement('button');
        button.textContent = `Button ${i}`;
        button.addEventListener('click', () => {
            messageElement.textContent = messages[i - 1];
            popup.classList.remove('hidden');
        });
        buttonsContainer.appendChild(button);
    }

    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
