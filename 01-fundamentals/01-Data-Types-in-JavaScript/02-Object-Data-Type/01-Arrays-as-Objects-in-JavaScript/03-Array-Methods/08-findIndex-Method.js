// findIndex() Method

var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findIndexMethod = (array) => {
  return array.findIndex((n) => n === 3);
};

console.log(findIndexMethod(numberList)); // Output: 2