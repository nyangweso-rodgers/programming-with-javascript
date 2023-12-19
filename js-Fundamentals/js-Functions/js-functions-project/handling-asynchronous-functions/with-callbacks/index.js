// Handling Asynchronous Requests using Callbacks

function greetMe(myName) {
  console.log("Hello, " + myName);
}

// Execute the greetMe function after a delay of 2000 milliseconds (2 seconds)
//setTimeout(greetMe, 2000, "Rodgers Nyangweso");
var timeId = setTimeout(greetMe, 2000, "Rodgers Nyangweso");
// cancell the execution of the scheduled function
clearTimeout(timeId);