// Calculator App

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
  console.log("Button clicked: ", button.textContent);
};

getDecimalBtn.addEventListener("click", () => {
  handleButtonClick(getDecimalBtn);
});

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

console.log(document.doctype, document.version);