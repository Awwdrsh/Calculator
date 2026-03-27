import { add, subtract } from './addSub.js';
import { multiply, divide } from './mulDiv.js';
import { isValidNumber, handleError } from './validation.js';

let currentInput = "";
let operator = "";
let firstValue = "";

function appendNumber(num) {
    currentInput += num;
    document.getElementById("display").value = currentInput;
}

function setOperation(op) {
    firstValue = currentInput;
    operator = op;
    currentInput = "";
}

function calculate() {
    let result;
    let a = parseFloat(firstValue);
    let b = parseFloat(currentInput);

    if (!isValidNumber(a) || !isValidNumber(b)) {
        alert("Invalid input");
        return;
    }

    switch (operator) {
        case '+': result = add(a, b); break;
        case '-': result = subtract(a, b); break;
        case '*': result = multiply(a, b); break;
        case '/': result = divide(a, b); break;
    }

    if (handleError(result)) return;

    document.getElementById("display").value = result;
    currentInput = result.toString();
}

function clearDisplay() {
    currentInput = "";
    firstValue = "";
    operator = "";
    document.getElementById("display").value = "";
}