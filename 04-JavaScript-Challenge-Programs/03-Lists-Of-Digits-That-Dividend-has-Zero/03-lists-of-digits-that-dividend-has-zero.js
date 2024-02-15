// Lists Of Digits That Dividend has Zero

const listsOfDigitsThatDividendHasZero = (num) => {
  if (num < 1 || num > Math.pow(10, 9) || num.toString().includes("0")) {
    console.log(
      "Value should be beetween 1 and less than 10^9 and should not contain zero"
    );
    return 0; // Indicate an error occurred
  } else {
    // Convert num to an array of digits
    let numDigitsArray = num.toString().split("").map(Number);
    console.log("numDigitsArray:", numDigitsArray); //TODO:

    // List all divisors of num
    let divisorsCount = 0;

    // iterate through the numDigitsArray
    for (const digit of numDigitsArray) {
      // skip if digit is 0 or digit is not a divior of num
      if (digit === 0 || num % digit !== 0) {
        continue;
      }
      // Increment count if digit is a divisor of num
      divisorsCount++;
    }
    // Return the count of divisors
    return divisorsCount;
  }
};

num = 8124;
console.log(listsOfDigitsThatDividendHasZero(num)); // output: 3