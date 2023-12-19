function displayResult(result) {
  console.log(result);
}

function calculateSum(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

calculateSum(1, 1, displayResult); // Output: 2