function displayResult(result) {
  document.getElementById("sumContainer").innerHTML = result;
}

function calculateSum(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

calculateSum(1, 1, displayResult); //

// Display My Name

function displayName(myName) {
  document.getElementById("displayMyNameContainer").innerHTML = myName;
}

setTimeout(displayName, 2000, "Rodgers Nyangweso");

// Display Current Date and Time Every Second
function displayCurrentDateTime() {
  let currentDatetIME = new Date();
  document.getElementById("displayCurrentDateTimeContainer").innerHTML =
    currentDatetIME.getHours() +
    ":" +
    currentDatetIME.getMinutes() +
    ":" +
    currentDatetIME.getSeconds();
}

// Set up an interval to execute printMessage every 1000 milliseconds
var intervalId = setInterval(displayCurrentDateTime, 1000);

// // Set up a timeout to stop the interval after 5000 milliseconds (5 seconds)
setTimeout(function () {
  clearInterval(intervalId); // Stop the interval
  console.log("Interval has expired after 5000 milliseconds");
}, 5000);
