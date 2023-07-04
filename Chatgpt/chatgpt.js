let display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    let result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    display.value = '';
}
