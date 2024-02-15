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

    if (codeString.length >= 2 && codeString.length <= 100) {
      // create an integer array from codeString
      let codeIntegerArray = codeString.split("").map(Number);

      // identify critical digits
      let criticalDigitsArray = codeIntegerArray.filter((digit, index) => {
        return codeIntegerArray.indexOf(digit) !== index;
      });

      console.log("codeString: " + codeString);
      console.log("codeIntegerArray:", codeIntegerArray);
      console.log("criticalDigitsArray: ", criticalDigitsArray);
      return criticalDigitsArray;
    } else {
      return "Invalid output. The length of codeString should be between 2 and 100 inclusive.";
    }
  }
};

let firstValue = 12;
let secondValue = 31;

strategicDigitRemovalForMaximumDecimalValue(firstValue, secondValue);
