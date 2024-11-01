// map() array method

let start = 1;
let end = 10;
const arrayOfPositiveNumbers = [];

const generatePositiveNumbers = (a, b) => {
  for (let i = a; i <= b; i++) {
    arrayOfPositiveNumbers.push(i);
  }
  //console.log(arrayOfPositiveNumbers);
  return arrayOfPositiveNumbers;
};

generatePositiveNumbers(start, end);

const generateDoublePositiveNumbers = (array) => {
  let arrayOfEvenNumbers = array.map((number) => number * 2);
  return arrayOfEvenNumbers;
};

console.log(generateDoublePositiveNumbers(arrayOfPositiveNumbers));
