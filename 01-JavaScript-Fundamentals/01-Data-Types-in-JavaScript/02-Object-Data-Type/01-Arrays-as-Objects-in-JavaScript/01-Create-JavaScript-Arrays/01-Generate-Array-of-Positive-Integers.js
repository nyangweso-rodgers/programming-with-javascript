// Generate Array of Positive Integers

let arrayOfPositiveIntegers = [];

const generateArrayOfPositiveIntegers = () => {
  let maximumValue = 100;
  for (let i = 0; i < maximumValue; i++) {
    arrayOfPositiveIntegers.push(i);
  }
  console.log("Array of positive integers:", arrayOfPositiveIntegers);
  //return arrayOfPositiveIntegers;
};
generateArrayOfPositiveIntegers();

// generate array of even numbers
let arrayOfEvenNumbers = [];
const generateArrayOfEvenNumbers = () => {
  let maximumValue = 100;
  for (let i = 0; i <= maximumValue; i++) {
    if (i % 2 === 0) {
      arrayOfEvenNumbers.push(i);
    }
  }
  console.log("Array of Even Numbers: ", arrayOfEvenNumbers);
};

generateArrayOfEvenNumbers();
