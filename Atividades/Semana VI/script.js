const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldReset = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function clearAll() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentInput === '0' || shouldReset) {
        currentInput = number;
        shouldReset = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperation(op) {
    if (operation !== null) calculate();
    previousInput = currentInput;
    operation = op;
    shouldReset = true;
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev)) return;

    switch (operation) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '×': result = prev * current; break;
        case '÷': result = prev / current; break;
        case '%': result = prev % current; break;
        default: return;
    }

    currentInput = result.toString();
    operation = null;
    updateDisplay();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            clearAll();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '×', '÷', '%'].includes(value)) {
            setOperation(value);
        } else {
            appendNumber(value);
        }
    });
});