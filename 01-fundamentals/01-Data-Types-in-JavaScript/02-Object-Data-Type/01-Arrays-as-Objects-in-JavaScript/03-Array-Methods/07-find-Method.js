// find() Method

var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const usingFindMethod = (array) => {
  return array.find((n) => n === 3);
};

console.log(usingFindMethod(numberList));