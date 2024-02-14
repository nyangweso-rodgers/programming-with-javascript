// reduce() Method

let start = 1;
let end = 100;
const arrayOfPositiveNumbers = [];

const generatePositiveNumbers = (a, b) => {
  for (let i = a; i <= b; i++) {
    arrayOfPositiveNumbers.push(i);
  }
  console.log("Array of Positive Numbers: ", arrayOfPositiveNumbers);
  return arrayOfPositiveNumbers;
};

//generatePositiveNumbers(start, end);

const reduceMethod = (array) => {
  let sumArry = array.reduce((a, b) => a + b);
  return sumArry;
};

console.log(reduceMethod(generatePositiveNumbers(start, end))); // Output: 5050
