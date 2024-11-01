// slice method

let start = 1;
let end = 10;
const arrayOfPositiveNumbers = [];

// Generate array of positive numbers
const generatePositiveNumbers = (a, b) => {
  for (let i = a; i <= b; i++) {
    arrayOfPositiveNumbers.push(i);
  }
  console.log("Array Of Positive Integers: ", arrayOfPositiveNumbers);
  return arrayOfPositiveNumbers;
};

generatePositiveNumbers(start, end); // Output: [1,2,3,4,5,6,7,8,9,10]

// using slice()
const sliceFunction = (array) => {
  return array.slice(1, 3);
};

console.log(sliceFunction(arrayOfPositiveNumbers)); // Output: [ 2, 3 ]
