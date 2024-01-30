let arrayOfPositiveNumbers = [];

const positiveIntegerNumbers = () => {
  let max = 100;
  for (let i = 0; i < max; i++) {
    arrayOfPositiveNumbers.push(i);
  }
};
positiveIntegerNumbers(); // Call the function to populate the array
console.log(arrayOfPositiveNumbers);
