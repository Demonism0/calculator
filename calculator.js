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

let numberA;
let numberB;
let operator;

function operate(operator, numberA, numberB) {
    operator(numberA, numberB);
}

// create function for add, subtract, multiply, divide
// create three variables for the first number, operator, second number
// create a function operate() that takes an operator and two numbers