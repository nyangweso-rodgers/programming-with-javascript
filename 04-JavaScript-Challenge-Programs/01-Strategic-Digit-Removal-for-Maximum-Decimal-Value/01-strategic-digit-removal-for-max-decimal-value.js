// Strategic Digit Removal for Maximum Decimal Value

const strategicDigitRemovalForMaximumDecimalValue = (
  firstValue,
  secondValue
) => {
  if (
    firstValue < 1 ||
    secondValue < 1 ||
    firstValue.toString().includes("0") ||
    secondValue.toString().includes("0")
  ) {
    return "Invalid input. Both parameters should be greater than 1 and not contain a zero digit.";
  } else {
    let codeString = `${firstValue}${secondValue}`;
    //console.log(codeString);
    //return codeString;

    if (codeString.length >= 2 && codeString.length <= 100) {
      // create an integer array from codeString
      let codeIntegerArray = codeString.split("").map(Number);

      // Identify the critical digit (most frequent)
      const criticalDigit = codeIntegerArray.reduce(
        (mostFrequentDigit, digit) => {
          const count = codeIntegerArray.filter((d) => d === digit).length;
          return count >
            codeIntegerArray.filter((d) => d === mostFrequentDigit).length
            ? digit
            : mostFrequentDigit;
        },
        codeIntegerArray[0]
      ); // Initialize with first digit

      let maxNumberWithoutCriticalDigit = parseInt(codeString);

      // Iterate only once, removing one instance of the critical digit
      const criticalDigitIndex = codeIntegerArray.indexOf(criticalDigit);
      if (criticalDigitIndex !== -1) {
        // Ensure the critical digit exists
        codeIntegerArray.splice(criticalDigitIndex, 1); // Remove one instance
        maxNumberWithoutCriticalDigit = parseInt(codeIntegerArray.join(""));
      }

      console.log("codeString: " + codeString);
      console.log("codeIntegerArray:", codeIntegerArray);
      //console.log("criticalDigitsArray: ", criticalDigitsArray);
      return maxNumberWithoutCriticalDigit.toString(); // Output as a string
    } else {
      return "Invalid output. The length of codeString should be between 2 and 100 inclusive.";
    }
  }
};

let firstValue = 12;
let secondValue = 314;
let criticalDigit = console.log(
  strategicDigitRemovalForMaximumDecimalValue(firstValue, secondValue)
);
