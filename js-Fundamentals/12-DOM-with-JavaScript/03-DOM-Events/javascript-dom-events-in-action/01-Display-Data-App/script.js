//

// Event 1: Alert Message, when button is clicked
const btnForAlertMessage = document.getElementById("btnForAlertMessage");
// console.log(btnForAlertMessage); // Output:

const alertMessage = () => {
  btnForAlertMessage.addEventListener("click", () => {
    alert("This is an elrst message, button has been clicked!");
  });
};

alertMessage();

// Event 2: Display Hello World!
const btnToDisplayText = document.getElementById("btnToDisplayText");

// Function to display text when button is clicked
const displayText = () => {
  // Adding a click event listener to the button
  btnToDisplayText.addEventListener("click", () => {
    // Changing the inner HTML of the button to "Hello World!"
    btnToDisplayText.innerHTML = "Hello World!";
  });
};

// Calling the displayText function to set up the event listener
displayText();

// Event 3: Display Date and Time
const btnToDisplayDateAndTime = document.getElementById(
  "btnToDisplayDateAndTime"
);
const displayDateAndTime = () => {
  btnToDisplayDateAndTime.addEventListener("click", () => {
    btnToDisplayDateAndTime.innerHTML = Date();
  });
};

displayDateAndTime();

// Event 4: Display Random Number
const btnToDisplayRandomNumber = document.getElementById(
  "btnToDisplayRandomNumber"
);
const displayRandomNumber = () => {
  btnToDisplayRandomNumber.addEventListener("click", () => {
    btnToDisplayRandomNumber.innerHTML = Math.random();
  });
};

displayRandomNumber();
