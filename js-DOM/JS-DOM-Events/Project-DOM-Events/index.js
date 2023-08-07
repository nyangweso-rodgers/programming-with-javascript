

const myFirstButton = document.getElementById('buttonOne');
//console.log(mySubmitButton.textContent); //TODO:

// alert "Button clicked when Button 1 is clicked"
myFirstButton.addEventListener('click', alertDisplay);

function alertDisplay() {
    alert('Button 1 is clicked!');
};


mySecondButton = document.getElementById('buttonTwo');
//console.log(mySecondButton); //TODO:

// display "Button Successfully Clicked!" message when Button 2 is clicked
mySecondButton.addEventListener('click', displayText);

function displayText() {
    mySecondButton.innerHTML = "Button 2 successfully Clicked!";
};

// Display current Datetime when Button 3 is clicked
myThirdButton = document.getElementById('buttonThree');
myThirdBtnP = document.getElementById('btnThreeP');
myThirdButton.addEventListener('click', displayDate);

function displayDate() {
    myThirdBtnP.innerHTML = Date();
};

// Display random number when Button 4 is clicked
myFourthButton = document.getElementById('buttonFour');
myFourthBtnP = document.getElementById('btnFourP');

myFourthButton.addEventListener('click', displayRandomNumber);

function displayRandomNumber() {
    myFourthBtnP.innerHTML = Math.random();
};

// Arithmetic Calculation
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

let myAddBtn = document.getElementById('addBtn');
let mySubBtn = document.getElementById('subBtn');
let myDivBtn = document.getElementById('divBtn');
let myMulBtn = document.getElementById('mulBtn');

let result = document.getElementById('result');


myAddBtn.addEventListener('click', sumNumberInputs);
mySubBtn.addEventListener('click', subtractNumberInputs);
myDivBtn.addEventListener('click', divideNumberInputs);
myMulBtn.addEventListener('click', multiplyNumberInputs);

function sumNumberInputs() {
    // user inputs
    let firstNumberInputValue = parseFloat(firstNumber.value);
    let secondNumberInputValue = parseFloat(secondNumber.value);
    result.innerHTML = firstNumberInputValue + secondNumberInputValue;
}

function subtractNumberInputs() {
    // user inputs
    let firstNumberInputValue = parseFloat(firstNumber.value);
    let secondNumberInputValue = parseFloat(secondNumber.value);
    result.innerHTML = firstNumberInputValue - secondNumberInputValue;
}

function divideNumberInputs() {
    // user inputs
    let firstNumberInputValue = parseFloat(firstNumber.value);
    let secondNumberInputValue = parseFloat(secondNumber.value);
    result.innerHTML = firstNumberInputValue / secondNumberInputValue;
}

function multiplyNumberInputs() {
    // user inputs
    let firstNumberInputValue = parseFloat(firstNumber.value);
    let secondNumberInputValue = parseFloat(secondNumber.value);
    result.innerHTML = firstNumberInputValue * secondNumberInputValue;
}
