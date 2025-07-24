function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.innerText = "❌ Please enter valid numbers.";
    return;
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      resultDiv.innerText = `✅ Result: ${num1} + ${num2} = ${result}`;
      break;
    case "subtract":
      result = num1 - num2;
      resultDiv.innerText = `✅ Result: ${num1} - ${num2} = ${result}`;
      break;
    case "multiply":
      result = num1 * num2;
      resultDiv.innerText = `✅ Result: ${num1} × ${num2} = ${result}`;
      break;
    case "divide":
      if (num2 === 0) {
        resultDiv.innerText = "⚠️ Division by zero is not allowed!";
        return;
      }
      result = num1 / num2;
      resultDiv.innerText = `✅ Result: ${num1} ÷ ${num2} = ${result}`;
      break;
    default:
      resultDiv.innerText = "Invalid operation.";
  }
}

function exitCalculator() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "👋 Thank you for using the calculator!";
}
