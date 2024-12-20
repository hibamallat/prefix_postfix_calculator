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

function backspaceHandle() {
  display.value = display.value.slice(0, -1);
}

function isOperator(operator) {
  if (
    operator == "+" ||
    operator == "-" ||
    operator == "*" ||
    operator == "/" ||
    operator == "%"
  )
    return true;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
  }
}

function evaluatePrefix(expression) {
  const stack = [];
  for (let i = expression.length - 1; i >= 0; i--) {
    if (isOperator(expression[i])) {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(operate(expression[i], a, b));
    } else {
      stack.push(parseFloat(expression[i]));
    }
  }
  return stack.pop();
}

function evaluatePostfix(expression) {
  const stack = [];
  for (let i = 0; i < expression.length; i++) {
    if (isOperator(expression[i])) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operate(expression[i], a, b));
    } else {
      stack.push(parseFloat(expression[i]));
    }
  }
  return stack.pop();
}

function calculateExpression() {
  const expression = display.value.trim();
  if (!expression) {
    alert("Please enter an expression.");
    return;
  }

  try {
    document.getElementById("prefixResult").textContent = evaluatePrefix([
      expression.split(" "),
    ]);
    document.getElementById("postfixResult").textContent = evaluatePostfix([
      expression.split(" "),
    ]);
  } catch (error) {
    alert("Invalid expression! Please check and try again.");
  }
}
clear.addEventListener("click", clearExpression);
space.addEventListener("click", addSpace);
backspace.addEventListener("click", backspaceHandle);
equals.addEventListener("click", calculateExpression);
