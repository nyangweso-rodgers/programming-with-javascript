// filter method

let priceList = [10, 20, 30, 40, 50];

const topTwoItemPrices = () => {
  let filteredPriceList = priceList.filter((price) => {
    return price >= 40;
  });
  console.log(filteredPriceList);
};

topTwoItemPrices(); // Output: [40, 50]

// Use Case 2: Get Even Numbers from numbers array
const arrayOfPositiveNumbers = [];

const generatePositiveNumbers = (start, end) => {
  for (let i = start; i < end; i++) {
    arrayOfPositiveNumbers.push(i);
  }
  const arrayOfEvenNumbers = arrayOfPositiveNumbers.filter((number) => {
    return number % 2 === 0;
  });
  return arrayOfEvenNumbers;
};

console.log(generatePositiveNumbers(10, 100));
