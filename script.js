const display = document.getElementById("result");
const equals = document.getElementById("equals");
const space = document.getElementById("space");
const backspace = document.getElementById("backspace");
const clear = document.getElementById("clear");

function appendToDisplay(input) {
  display.value += input;
}

function clearExpression() {
  display.value = "";
}

function addSpace() {
  display.value += " ";
}

function backSpace() {
  display.value = display.substr(0, display.length - 1);
}

clear.addEventListener("click", clearExpression);
space.addEventListener("click", addSpace);
backspace.addEventListener("click", backSpace);
