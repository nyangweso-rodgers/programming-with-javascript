// calculate the sum of natural numbers from 1 to n using the recursion

let sumNaturalNumbers = (n) => {
  if (n <= 1) {
    return n;
  }
  return n + sumNaturalNumbers(n - 1);
};

console.log(sumNaturalNumbers(4)); // Output: 10
