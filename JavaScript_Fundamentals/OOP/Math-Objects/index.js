// Math Objects in JavaScript


// Program which asks for user input for a number and computes its square root
var x = document.getElementById("square-root");
var randomNumber = prompt("Enter a Random Number: ", " ");
var squareRoot = Math.sqrt(randomNumber);

x.innerHTML = "The Square Root Of " + randomNumber + " is " + squareRoot;