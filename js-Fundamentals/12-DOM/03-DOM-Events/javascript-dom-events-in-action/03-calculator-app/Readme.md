# Calculator App

## Description

- Design a Scientific Calculator App using `html5`, `css3`, `Bootstrap5`, and `JavaScript`

## User Story

### Task

- Ensure

  ```js
  const getCalcularoDisplay = document.getElementById("calculatorDisplay");
  const getBtn1 = document.getElementById("btn1");

  var valueOne = ""; // Store the current value in the display
  getBtn1.addEventListener("click", () => {
    valueOne += getBtn1.textContent; // Append the button value to the current display
    getCalcularoDisplay.innerHTML = valueOne; // Update the display
  });
  ```

## Steps

### Steps 1

- ## create an `index.html` file with the following structure:

### Steps 2

- add `style.css` with some styling

### Steps 3

- add `script.js` to handle events like `click`.
- First, create variables names and define `handleButtonClick` function to handle each buttons on a click:

  ```js
  const getCalcularoDisplay = document.getElementById("calculatorDisplay");
  const getBtnZero = document.getElementById("btnZero");
  const getBtn1 = document.getElementById("btn1");
  const getBtn2 = document.getElementById("btn2");
  const getBtn3 = document.getElementById("btn3");
  const getBtn4 = document.getElementById("btn4");
  const getBtn5 = document.getElementById("btn5");
  const getBtn6 = document.getElementById("btn6");
  const getBtn7 = document.getElementById("btn7");
  const getBtn8 = document.getElementById("btn8");
  const getBtn9 = document.getElementById("btn9");

  const getDecimalBtn = document.getElementById("decimalBtn");
  const getEqualityBtn = document.getElementById("equalityBtn");
  const getAddBtn = document.getElementById("addBtn");
  const getSubtractBtn = document.getElementById("subtractBtn");
  const getMultiplyBtn = document.getElementById("multiplyBtn");
  const getDivideBtn = document.getElementById("divideBtn");

  let currentDisplayValue = "";
  const handleButtonClick = (button) => {
    currentDisplayValue += button.textContent;
    getCalcularoDisplay.innerHTML = currentDisplayValue;
  };

  getBtnZero.addEventListener("click", () => {
    handleButtonClick(getBtnZero);
  });
  getBtn1.addEventListener("click", () => {
    handleButtonClick(getBtn1);
  });

  getBtn2.addEventListener("click", () => {
    handleButtonClick(getBtn2);
  });

  getBtn3.addEventListener("click", () => {
    handleButtonClick(getBtn3);
  });
  getBtn4.addEventListener("click", () => {
    handleButtonClick(getBtn4);
  });

  getBtn5.addEventListener("click", () => {
    handleButtonClick(getBtn5);
  });

  getBtn6.addEventListener("click", () => {
    handleButtonClick(getBtn6);
  });

  getBtn7.addEventListener("click", () => {
    handleButtonClick(getBtn7);
  });
  getBtn8.addEventListener("click", () => {
    handleButtonClick(getBtn8);
  });

  getBtn9.addEventListener("click", () => {
    handleButtonClick(getBtn9);
  });
  ```
- The above code is a correct way to handle multiple buttons and display their values in the calculator display. However, it can be made more concise and maintainable using a loop:
  ```js
  
  ``` 