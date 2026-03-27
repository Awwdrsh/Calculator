import { add, subtract } from './addSub.js';
import { multiply, divide } from './mulDiv.js';
import { isValidNumber, handleError } from './validation.js';

let currentInput = "";
let operator = "";
let firstValue = "";

// Append number or decimal
function appendNumber(num) {
    currentInput += num;
    document.getElementById("display").value = currentInput;
}

// Set operation (+, -, *, /)
function setOperation(op) {
    if (currentInput === "") {
        alert("Enter a number first");
        return;
    }
    firstValue = currentInput;
    operator = op;
    currentInput = "";
}

// Perform calculation
function calculate() {
    if (!operator) {
        alert("No operation selected");
        return;
    }

    if (currentInput === "" || firstValue === "") {
        alert("Enter numbers first");
        return;
    }

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
        default:
            alert("Invalid operation");
            return;
    }

    if (handleError(result)) return;

    document.getElementById("display").value = result;
    currentInput = result.toString();
    operator = "";
}

// Clear display
function clearDisplay() {
    currentInput = "";
    firstValue = "";
    operator = "";
    document.getElementById("display").value = "";
}

// ✅ Make functions accessible to HTML
window.appendNumber = appendNumber;
window.setOperation = setOperation;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
