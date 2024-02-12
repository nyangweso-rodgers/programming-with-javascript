// strategic digit removal  for maximum decimal value

var solution = (a, b) => {
  if (
    a < 1 ||
    a.toString().includes("0") ||
    b < 1 ||
    b.toString().includes("0")
  ) {
    return "Invalid input. Both parameters should be greater than 1 and not contain a zero digit.";
  } else {
    codeString = `${a}${b}`;
    if (codeString.length >= 2 && codeString.length <= 100) {
      console.log("codeString Legth: ", codeString.length);
      //return codeString;

      // Finding the recurring element, criticalDigit
      let digitFrequencyArray = {}; // Initialize an empty object to store digit frequency
      for (let codeStringDigit of codeString) {
        // Check if the digit already exists in digitFrequencyArray
        digitFrequencyArray[codeStringDigit] =
          (digitFrequencyArray[codeStringDigit] || 0) + 1;
        //return digitFrequencyArray;
      }
      console.log("Digit Frequency:", digitFrequencyArray);
    } else {
      return "Invalid output. The length of codeString should be between 2 and 100 inclusive.";
    }
  }
};
let a = 1222;
let b = 3;
console.log(solution(a, b));
