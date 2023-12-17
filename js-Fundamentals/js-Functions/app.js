// Functions

// Function Declaration
function divideFunctionWithFunctionDeclaration(dividend, divisor) {
  try {
    // Attempt the division
    if (divisor === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    const result = dividend / divisor;
    return result;
  } catch (error) {
    // handle error
    console.error("Error: ", error.message);
    return undefined; // or any other value to indicate failure
  } finally {
    // Code in this block will execute regardless of whether an error occurred or not
    console.log("Division operation completed.");
  }
}

// console.log(divideFunctionWithFunctionDeclaration(6, 2));

// Function Expression

// Arrow Functions
