class Calculator {
    /* 
    constructor class for Calculator object.
    Calculator has 3 instance properties: previousOperand, currentOperand, and currentOperator.
    */
    constructor(previousOperand = '', currentOperand = '', currentOperator = '') {
        this.previousOperand = previousOperand;
        this.currentOperand = currentOperand;
        this.currentOperator = currentOperator;
    }

    /*
    
    */
    calculate() {
        switch (this.currentOperator) {
            case '+':
                return +this.previousOperand + +this.currentOperand;
                break;
            case '-':
                return +this.previousOperand - +this.currentOperand;
                break;
            case '*':
                return +this.previousOperand * +this.currentOperand;
                break;
            case '÷':
                return +this.previousOperand / +this.currentOperand;
                break;
            default:
                console.log('Error! Something went wrong with calculate().')
        }
    }

    /* 
    Append number to currentOperand and display it in the bottomScreen.
    */
    appendNumber(number) {

        // ensure decimal only appears once after a number
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (number === '.' && this.currentOperand === '') return;

        // append digit to current operand as a string
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    /*
    Remove last digit of the current operand.
    */
    delete() {

        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    /*
    Clear the bottomScreen element so that it is blank with no text.
    */
    clearBottomScreen(screenBottom) {

        // this.previousOperand = '';
        // this.currentOperand = '';

        screenBottom.innerText = '';
        // this.updateScreen(screenBottom);

    }

    /*
    Clear the topScreen element so that it is blank with no text.
    */
    clearTopScreen(screenTop) {

        screenTop.innerText = '';

    }

    /*
    Update screen element(s) with current operands.
    */
    updateScreen(screen) {

        screen.innerText = this.currentOperand.toString();

    }
}

// Make new Calculator object.
const calc = new Calculator();

// Declare constant variables for HTML elements.
const buttons = document.querySelectorAll('.btn');
const screenTop = document.querySelector('.screen-top');
const screenBottom = document.querySelector('.screen-bottom');
const acBtn = document.querySelector('.ac-btn');

// Define Array ojbects for the numerical and operator buttons.
const numericalButtons = new Array('0','1','2','3','4','5','6','7','8','9','.');
const operatorButtons = new Array('+','-','*','÷');

buttons.forEach(button => {
    // Add event listener for each button, based on innerText of the button.
    button.addEventListener('click', () => {

        // Numerical buttons.
        if (numericalButtons.includes(button.innerText)) {

            calc.appendNumber(button.innerText);
            calc.updateScreen(screenBottom);

        }

        // Operator buttons.
        else if (operatorButtons.includes(button.innerText)){

            calc.currentOperator = button.innerText;
            calc.previousOperand = calc.currentOperand;
            calc.currentOperand = '';
            screenTop.innerText = calc.previousOperand + ' ' + calc.currentOperator;
            calc.clearBottomScreen(screenBottom);

        }

        // Equals button.
        else if (button.innerText === '=') {

            screenBottom.innerText = calc.calculate()

            calc.currentOperand = screenBottom.innerText;
            calc.previousOperand = '';
            calc.previousOperator = '';

            calc.clearTopScreen(screenTop);

        }

        // AC Button.
        else if (button.innerText === 'AC') {

            calc.previousOperand = '';
            calc.currentOperand = '';
            calc.currentOperator = '';

            calc.clearBottomScreen(screenBottom);
            calc.clearTopScreen(screenTop);

        }

        // DEL Button.
        else if (button.innerText === 'DEL') {

            calc.delete();
            calc.updateScreen(screenBottom);

        }

    });
    
});