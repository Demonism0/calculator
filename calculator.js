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
        console.log('runningA');
        if (String(numberA).length > 10) {
            numberA = Number(String(numberA).slice(0,10));
        }
        display.textContent = numberA;
    } else {
        console.log('runningB');
        display.textContent = numberB;
    }
}

function numberClick(button) {
    if (operator === undefined) {
        console.log('clickA')
        if (String(numberA).length < 10) {
            numberA = '' + numberA + button.textContent;
            numberA = Number(numberA);
        }
    } else {
        console.log('clickB')
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
        if (String(numberA) === '0') {
        } else if (String(numberA).length < 10) {
            numberA = '' + numberA + button.textContent
        }
    } else {
        if (String(numberB) === '0') {
        } else if (String(numberB).length < 10) {
            if (numberB === undefined) {
                numberB = 0;
            } else {
                numberB = '' + numberB + button.textContent;
            }
        }
    }
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
oneBtn.addEventListener('click', () => {
    console.log('click');
    numberClick(oneBtn);
    updateDisplay()
});
twoBtn.addEventListener('click', () => {
    numberClick(twoBtn);
    updateDisplay();
});
threeBtn.addEventListener('click', () => {
    numberClick(threeBtn);
    updateDisplay();
});
fourBtn.addEventListener('click', () => {
    numberClick(fourBtn);
    updateDisplay();
});
fiveBtn.addEventListener('click', () => {
    numberClick(fiveBtn);
    updateDisplay();
});
sixBtn.addEventListener('click', () => {
    numberClick(sixBtn);
    updateDisplay();
});
sevenBtn.addEventListener('click', () => {
    numberClick(sevenBtn);
    updateDisplay();
});
eightBtn.addEventListener('click', () => {
    numberClick(eightBtn);
    updateDisplay();
});
nineBtn.addEventListener('click', () => {
    numberClick(nineBtn);
    updateDisplay();
});

const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');
const subtractBtn = document.querySelector('#subtract');
const addBtn = document.querySelector('#add');
const equalsBtn = document.querySelector('#equals');

equalsBtn.addEventListener('click', () => {
    divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    numberA = operate();
    operator = undefined;
    numberB = undefined;
    updateDisplay();
})

divideBtn.addEventListener('click', () => {
    divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
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
    divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
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
    divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
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
    divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
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
    divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
    addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
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
        divideBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
        multiplyBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
        subtractBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
        addBtn.style.cssText = "background-color: rgb(236, 143, 12); color: white;";
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