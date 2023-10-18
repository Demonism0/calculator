function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let numberA = 0;
let numberB;
let operator;

function operate(operator, numberA, numberB) {
    operator(numberA, numberB);
}

const display = document.querySelector('#display');

function updateDisplay(operatorParam, numberAParam, numberBParam) {
    if (operatorParam === undefined || val == null || val.length <= 0) {
        console.log('runningA');
        display.textContent = numberAParam;
    } else {
        console.log('runningB');
        display.textContent = numberBParam;
    }
}

function numberClick(button, operatorParam, numberAParam, numberBParam) {
    if (operatorParam === undefined || val == null || val.length <= 0) {
        console.log('clickA')
        if (String(numberA).length < 10) {
            numberA = '' + numberAParam + button.textContent;
            numberA = Number(numberA);
        }
    } else {
        console.log('clickB')
        if (String(numberB).length < 10) {
            numberB = '' + numberBParam + button.textContent;
            numberB = Number(numberB);
        }
    }
}

function decimalClick(operatorParam, numberAParam, numberBParam) {
    if (operatorParam === undefined || val == null || val.length <= 0) {
        if (String(numberA).includes('.')) {
        } else if (String(numberA).length < 10) {
            numberA = '' + numberAParam + '.'
        }
    } else {
        if (String(numberB).includes('.')) {
        } else if (String(numberb).length < 10) {
            numberB = '' + numberBParam + '.'
        }
    }
}

function zeroClick(button, operatorParam, numberAParam, numberBParam) {
    if (operatorParam === undefined || val == null || val.length <= 0) {
        if (String(numberA) === '0') {
        } else if (String(numberA).length < 10) {
            numberA = '' + numberAParam + button.textContent
        }
    } else {
        if (String(numberB) === '0') {
        } else if (String(numberb).length < 10) {
            numberB = '' + numberBParam + button.textContent
        }
    }
}

const decimalBtn = document.querySelector('#decimal');
const zeroBtn = document.querySelector('#zero');
const dblZeroBtn = document.querySelector('#dblzero');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');

decimalBtn.addEventListener('click', () => {
    decimalClick( operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
zeroBtn.addEventListener('click', () => {
    zeroClick(zeroBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
dblZeroBtn.addEventListener('click', () => {
    zeroClick(dblZeroBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
oneBtn.addEventListener('click', () => {
    console.log('click');
    numberClick(oneBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB)
});
twoBtn.addEventListener('click', () => {
    numberClick(twoBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
threeBtn.addEventListener('click', () => {
    numberClick(threeBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
fourBtn.addEventListener('click', () => {
    numberClick(fourBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
fiveBtn.addEventListener('click', () => {
    numberClick(fiveBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
sixBtn.addEventListener('click', () => {
    numberClick(sixBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
sevenBtn.addEventListener('click', () => {
    numberClick(sevenBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
eightBtn.addEventListener('click', () => {
    numberClick(eightBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});
nineBtn.addEventListener('click', () => {
    numberClick(nineBtn, operator, numberA, numberB);
    updateDisplay(operator, numberA, numberB);
});

const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector('#backspace');
const negPosBtn = document.querySelector('#negpos');

const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const subtractBtn = document.querySelector('#subtract');
const addBtn = document.querySelector('#add');
const equalsBtn = document.querySelector('#equals');

updateDisplay(operator, numberA, numberB);

// create function for add, subtract, multiply, divide
// create three variables for the first number, operator, second number
// create a function operate() that takes an operator and two numbers

// textContent for #display to be numberA or numberB
// numberA defaults to zero
// if operator is not assigned a function, numbers and decimals will append to numberA
// create query selectors for all the numbers