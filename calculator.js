function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate() {
    if (operator === undefined) {
        return numberA;
    } else if (numberB === undefined) {
        return operator(numberA, numberA);
    } else {
        return operator(numberA, numberB);
    }
}

function updateDisplay() {
    if (operator === undefined) {
        if (String(numberA).length > 10) {
            numberA = Number(String(numberA).slice(0,10));
        }
        display.textContent = numberA;
    } else {
        display.textContent = numberB;
    }
}

function createNumberBtn(button) {
    button.addEventListener('click', () => {
        numberClick(button);
        updateDisplay();
    })
}

function numberClick(button) {
    if (operator === undefined) {
        if (String(numberA).length < 10) {
            numberA = '' + numberA + button.textContent;
            numberA = Number(numberA);
        }
    } else {
        if (String(numberB).length < 10) {
            if (numberB === undefined) {
                numberB = button.textContent;
            } else {
                numberB = '' + numberB + button.textContent;
                numberB = Number(numberB);
            }  
        }
    }
}

function decimalClick() {
    if (operator === undefined) {
        if (String(numberA).includes('.')) {
        } else if (String(numberA).length < 10) {
            numberA = '' + numberA + '.'
        }
    } else {
        if (String(numberB).includes('.')) {
        } else if (String(numberB).length < 10) {
            if (numberB === undefined) {
                numberB = '0.';
            } else {
                numberB = '' + numberB + '.';
            }
        }
    }
}

function zeroClick(button) {
    if (operator === undefined) {
        if (String(numberA) === '0' || String(numberA) === '-0') {
        } else if (String(numberA).length < 10) {
            numberA = '' + numberA + button.textContent
        }
    } else {
        if (String(numberB) === '0' || String(numberB) === '-0') {
        } else if (String(numberB).length < 10) {
            if (numberB === undefined) {
                numberB = 0;
            } else {
                numberB = '' + numberB + button.textContent;
            }
        }
    }
}

function clearColors() {
    divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
}

let numberA = 0;
let numberB = undefined;
let operator = undefined;

const display = document.querySelector('#display');

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

const numBtns = [oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn];
numBtns.forEach((numBtn) => createNumberBtn(numBtn));

decimalBtn.addEventListener('click', () => {
    decimalClick();
    updateDisplay();
});
zeroBtn.addEventListener('click', () => {
    zeroClick(zeroBtn);
    updateDisplay();
});
dblZeroBtn.addEventListener('click', () => {
    zeroClick(dblZeroBtn);
    updateDisplay();
});

const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const subtractBtn = document.querySelector('#subtract');
const addBtn = document.querySelector('#add');
const equalsBtn = document.querySelector('#equals');

equalsBtn.addEventListener('click', () => {
    clearColors();
    numberA = operate();
    operator = undefined;
    numberB = undefined;
    updateDisplay();
})

divideBtn.addEventListener('click', () => {
    clearColors();
    divideBtn.style.cssText = "background-color: white; color: rgb(236, 143, 12);";
    if (numberB !== undefined) {
        numberA = operate();
    }
    operator = undefined;
    numberB = undefined;
    updateDisplay();
    operator = divide;
})

multiplyBtn.addEventListener('click', () => {
    clearColors();
    multiplyBtn.style.cssText = "background-color: white; color: rgb(236, 143, 12);";
    if (numberB !== undefined) {
        numberA = operate();
    }
    operator = undefined;
    numberB = undefined;
    updateDisplay();
    operator = multiply;
})

subtractBtn.addEventListener('click', () => {
    clearColors();
    subtractBtn.style.cssText = "background-color: white; color: rgb(236, 143, 12);";
    if (numberB !== undefined) {
        numberA = operate();
    }
    operator = undefined;
    numberB = undefined;
    updateDisplay();
    operator = subtract;
})

addBtn.addEventListener('click', () => {
    clearColors();
    addBtn.style.cssText = "background-color: white; color: rgb(236, 143, 12);";
    if (numberB !== undefined) {
        numberA = operate();
    }
    operator = undefined;
    numberB = undefined;
    updateDisplay();
    operator = add;
})

const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector('#backspace');
const negPosBtn = document.querySelector('#negpos');

clearBtn.addEventListener('click', () => {
    clearColors();
    numberB = undefined;
    operator = undefined;
    numberA = 0;
    updateDisplay();
})

backspaceBtn.addEventListener('click', () => {
    if (operator === undefined) {
        numberA = String(numberA);
        numberA = numberA.slice(0, numberA.length -1);
        if (numberA === '-' || String(numberA) === '') {
            numberA = 0;
        }
    } else if (numberB === undefined || String(numberB) === '' || String(numberB) === '-0') {
        clearColors();
        numberB = undefined;
        operator = undefined;
    } else {
        numberB = String(numberB);
        numberB = numberB.slice(0, numberB.length -1);
        if (numberB === '-' || String(numberB) === '') {
            numberB = undefined;
        }
    }
    updateDisplay();
})

negPosBtn.addEventListener('click', () => {
    if (operator !== undefined) {
        if (numberB !== undefined) {
            if (numberB < 0 || String(numberB) === '-0') {
                numberB = String(numberB).replace('-', '')
            } else {
                numberB = '-' + numberB;
            }
        } else {
            numberB = '-0';
        }
    } else {
        if (numberA < 0 || String(numberA) === '-0') {
            numberA = String(numberA).replace('-', '')
        } else {
            numberA = '-' + numberA;
        }
    }
    updateDisplay();
})

updateDisplay();