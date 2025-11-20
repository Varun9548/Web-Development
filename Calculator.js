
// calci js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'C') { 
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            try {
                if (currentInput.includes('√')) {
                    currentInput = currentInput.replace('√', 'Math.sqrt');
                }
                if (currentInput.includes('^')) {
                    currentInput = currentInput.replace('^', '**');
                }
                const result = eval(currentInput);
                if (result === Infinity || isNaN(result)) {
                    display.value = 'Error';
                } else {
                    display.value = result;
                }
                currentInput = result;
            } catch {
                display.value = 'Error';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
