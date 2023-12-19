// Handling Asynchronous Requests using Callbacks

// setTimeout()
// Execute the greetMe function after a delay of 2000 milliseconds (2 seconds)

// setInterval()
// Display current date and time every 1 sec
function displayCurrentDateTime() {
  let currentDateTime = new Date();
  console.log(currentDateTime);
}

setInterval(displayCurrentDateTime, 1000);