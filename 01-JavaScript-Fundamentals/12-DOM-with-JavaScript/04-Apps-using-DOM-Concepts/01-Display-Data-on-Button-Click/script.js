// Display Data on a Button Click

// get document elements
const btnForAlertMessage = document.getElementById("btnForAlertMessage");
const btnToDisplayText = document.getElementById("btnToDisplayText");
const btnToDisplayDateAndTime = document.getElementById(
  "btnToDisplayDateAndTime"
);
const btnToDisplayRandomNumber = document.getElementById(
  "btnToDisplayRandomNumber"
);

// get alert message
const displayAlertMessage = () => {
  let alertMessage = "This is an alert message, button has been clicked!";
  alert(alertMessage);
  console.log(alertMessage);
};

// function 2: Display Hello World!
const displayHelloWorld = () => {
  let helloWorldMessage = "Hello World!";
  btnToDisplayText.innerHTML = helloWorldMessage;
};

// function 3: Display Current Date and Time
const displayCurrentDateAndTime = () => {
  let currentDateAndTime = new Date();
  btnToDisplayDateAndTime.innerHTML = currentDateAndTime;
};

// function 4: display random number
const displayRandomNumber = () => {
  const randomNumberCard = document.getElementById("randomNumberCard");
  let randomNumber = Math.random();
  const spanElement = document.createElement("span");
  spanElement.textContent = randomNumber;
  randomNumberCard.appendChild(spanElement);
};

// Add event handlers
btnForAlertMessage.addEventListener("click", displayAlertMessage);
btnToDisplayText.addEventListener("click", displayHelloWorld);
btnToDisplayDateAndTime.addEventListener("click", displayCurrentDateAndTime);
btnToDisplayRandomNumber.addEventListener("click", displayRandomNumber);
