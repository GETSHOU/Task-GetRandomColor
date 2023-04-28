import { getRandomColor } from './utils';

export default function initApp() {
    const bodyElement = document.body;

    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';

    bodyElement.append(button);

    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        bodyElement.style.background = getRandomColor();
    })
}