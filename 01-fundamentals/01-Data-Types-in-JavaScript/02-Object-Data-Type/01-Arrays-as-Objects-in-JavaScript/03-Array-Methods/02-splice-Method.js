// splice method

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

//
const removeElementsUsingSplice = (array) => {
  array.splice(1, 2); // starting from index 1, remove 2 elements
  return array;
};

console.log(removeElementsUsingSplice(arrayOfPositiveNumbers)); // Output: [1,4,5,6,7,8,9,10]

// remove and replace elements
const removeAndReplaceArrayElementsUsingSplice = (array) => {
  array.splice(0, 2, "New Element", 'Another Element');
  return array;
};

console.log(removeAndReplaceArrayElementsUsingSplice(arrayOfPositiveNumbers)); // Output:
