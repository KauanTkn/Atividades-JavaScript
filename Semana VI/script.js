document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.getElementById('calculator');
    
    const display = document.createElement('div');
    display.id = 'display';
    display.textContent = '0';
    calculator.appendChild(display);
    
    const buttons = [
        { text: 'AC', className: 'function' },
        { text: '✓', className: 'function' },
        { text: '%', className: 'function' },
        { text: '/', className: 'operation' },
        { text: '7', className: 'number' },
        { text: '8', className: 'number' },
        { text: '9', className: 'number' },
        { text: '*', className: 'operation' },
        { text: '4', className: 'number' },
        { text: '5', className: 'number' },
        { text: '6', className: 'number' },
        { text: '-', className: 'operation' },
        { text: '1', className: 'number' },
        { text: '2', className: 'number' },
        { text: '3', className: 'number' },
        { text: '+', className: 'operation' },
        { text: '0', className: 'number zero' },
        { text: '.', className: 'number' },
        { text: '=', className: 'operation' }
    ];
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.className = btn.className;
        
        button.addEventListener('click', function() {
            handleButtonClick(btn.text);
        });
        
        buttonContainer.appendChild(button);
    });
    
    calculator.appendChild(buttonContainer);
    
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let resetInput = false;
    
    function handleButtonClick(value) {
        if (value >= '0' && value <= '9') {
            if (currentInput === '0' || resetInput) {
                currentInput = value;
                resetInput = false;
            } else {
                currentInput += value;
            }
        } else if (value === '.') {
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
        } else if (value === 'AC') {
            currentInput = '0';
            previousInput = '';
            operation = null;
        } else if (value === '✓') {
            currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        } else if (value === '%') {
            currentInput = (parseFloat(currentInput) / 100).toString();
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (operation !== null) calculate();
            previousInput = currentInput;
            operation = value;
            resetInput = true;
        } else if (value === '=') {
            if (operation !== null) {
                calculate();
                operation = null;
            }
        }
        
        display.textContent = currentInput;
    }
    
    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        resetInput = true;
    }
});
