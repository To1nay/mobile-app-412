document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '❤️') {
                button.textContent = '💔';
            } else {
                button.textContent = '❤️';
            }
        });
    });
});