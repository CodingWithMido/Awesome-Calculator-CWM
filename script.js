const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        switch (value) {
            case 'AC':
                display.value = '';
                break;
            case 'DEL':
                display.value = display.value.slice(0, -1);
                break;
            case '%':
                display.value = String(Number(display.value) / 100);
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                display.value += value;
                break;
            case '=':
                display.value = String(eval(display.value));
                break;
            default:
                display.value += value;
                break;
        }
    });
});