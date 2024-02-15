// Strategic Digit Removal for Maximum Decimal Value

const strategicDigitRemovalForMaximumDecimalValue = (
  codeString,
  criticalDigit
) => {
  // validate input
  if (
    codeString < 1 ||
    criticalDigit < 1 ||
    codeString.includes("0") ||
    criticalDigit.toString().includes("0") ||
    codeString.length < 2 ||
    codeString.length > 100
  ) {
    console.log(
      "Invalid input. Both parameters should be greater than 1 and not contain a zero digit."
    );
    return 0; // Return 0 in case of validation errors
  } else {
    // Convert string to number array
    let codeIntegerArray = codeString.split("").map(Number);
    console.log("codeIntegerArray: ", codeIntegerArray); // TODO: Log codeIntegerArray

    // find all occurances of the criticalDigit and remove one of them
    let criticalDigitOccurrenceIndices = [];
    for (let i = 0; i < codeIntegerArray.length; i++) {
      if (codeIntegerArray[i] === criticalDigit) {
        criticalDigitOccurrenceIndices.push(i);
      }
    }
    console.log("criticalDigitOccurrenceIndices: ", criticalDigitOccurrenceIndices); // TODO: Log criticalDigitOccurrenceIndices

    // ensure criticalDigit exists at least once
    if (criticalDigitOccurrenceIndices.length === 0) {
      return "Critical digit not found in codeString.";
    } else {
      // Initialize maximum number without criticalDigit
      let maxNumberWithoutCriticalDigit = 0;

      // Iterate over each occurrence of the critical digit
      for (let index of criticalDigitOccurrenceIndices) {
        // Copy the array to exclude the current occurrence of the critical digit
        let rearrangedArray = [...codeIntegerArray];
        rearrangedArray.splice(index, 1);
        console.log("rearrangedArray: ", rearrangedArray); // TODO: Log rearrangedArray

        // Calculate the number after removing the critical digit
        let rearrangedNumber = parseInt(rearrangedArray.join(""));
        console.log("rearrangedNumber: ", rearrangedNumber); // TODO: Log rearrangedNumber

        //Update maxNumberWithoutCriticalDigit if necessary
        if (rearrangedNumber > maxNumberWithoutCriticalDigit) {
          maxNumberWithoutCriticalDigit = rearrangedNumber;
        }
        console.log(
          "maxNumberWithoutCriticalDigit: ",
          maxNumberWithoutCriticalDigit
        ); // TODO: Log maxNumberWithoutCriticalDigit
      }
      return maxNumberWithoutCriticalDigit.toString(); // Output as a string
    }
  }
};

let codeString = "1231"; // Declare as a string
let criticalDigit = 1;

console.log(
  strategicDigitRemovalForMaximumDecimalValue(codeString, criticalDigit)
);
