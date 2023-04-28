export function getRandomColor() {
    // Используется шестнадцатеричная система счисления с основанием 16: от 0 до 9 и от A до F
    const HEX = '0123456789ABCDEF';

    let randomColor = '#';

    console.log(HEX.split(''));
    
    // Перебираем рандомные значения из массива HEX до 6 символов
    for (let i = 0; i < 6; i++) {
        randomColor += HEX[Math.floor(Math.random() * HEX.length)];

        console.log(randomColor);
    }

    console.log(`Текущий цвет фона: ${randomColor}`);

    return randomColor;
}