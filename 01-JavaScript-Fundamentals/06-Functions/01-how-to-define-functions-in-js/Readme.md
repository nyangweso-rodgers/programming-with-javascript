# How to Define Functions in JavaScript

## Table of Contents

# Function Declaration

- **Function Declaration** can be called earlier than it is defined. For example, a global Function Declaration is visible in the whole script, no matter where it is.
- When `JavaScript` prepares to run the script, it first looks for global Function Declarations in it and creates the functions.

- **Function Declarations** load before the code is executed. The function in **function declartion** can be accessed before and after the function definiton. consists of the `function` keyword, followed by:

  - Name of the function
  - lists of parameters to the function, enclosed in a parenthesis
  - JS statements that define the function, enclosed in curly brackets

- Syntax:

  ```js
  // function declaration syntax
  function functionName(params) {
    // code to be executed goes here
  }
  ```

- Examples:

  1. `sumFunction`

     - define a `sumFunction` which takes two integers and returns the sum

       ```js
       function sumFunction(a, b) {
         return a + b;
       }

       console.log(sumFunction(1, 2)); // Output: 3
       ```

  2. `divideFunction` with Error Handling

     - defines a division function while handling errors

       ```js
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

       console.log(divideFunctionWithFunctionDeclaration(6, 2));
       ```

# Function Constructor

- Example 1:

  ```js
  let divideFunctionWithConstructor = new Function(
    "dividend",
    "divisor",
    "return dividend / divisor"
  );

  console.log(divideFunctionWithConstructor(7, 2)); // Output: 3.5
  ```

# Function Expression

- Functions can be assigned to `variables`, i.e., `Function Expression`
- Syntax:

  ```js
  var x = function exampleFunction() {
    console.log("example function");
  };
  ```

- **Function Expression** load when the interpreter reaches that line of code. If it's called before then it leads to an error. Why? _because the Interpreter will only hoist variable declaration to the top but keeps assignment at the same line._ The function in **Function Expression** can be accessed only after the function definition.
- Example 1:

  ```js
  // Functions with Function Expression
  let divideFunctionWithExpression = function (dividend, divisor) {
    const result = dividend / divisor;
    //return result;
    console.log("Result from Function Expression: " + result);
  };

  divideFunctionWithExpression(2, 2); // Output: 4
  ```

# Arrow Functions

- prior to `ES6`, a `js` function was defined like this:

  ```js
  let firstName = "Rodgers";
  let lastName = "Nyangweso";

  function displayFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
  }

  console.log(displayFullName(firstName, lastName)); // Output: "Rodgers Nyangweso"
  ```

* **Arrow Functions** provide a more coincise syntax for writing **functions expressions** by removing the **function** and "**return**" keywords.

  ```js
  let firstName = "Rodgers";
  let lastName = "Nyangweso";

  // Arrow Functions
  let displayFullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;

    return fullName;
  };

  console.log(displayFullName(firstName, lastName)); // Output: "Rodgers Nyangweso"
  ```

- Example 2:

  ```js
  // Functions with Arrow Functions
  let divideFunctionWithArrow = (dividend, divisor) => {
    const result = dividend / divisor;
    // return result;
    // Or
    console.log("Result from Arrow Function: ", result);
  };

  divideFunctionWithArrow(3, 2); // Output: 1.5
  ```

## Arrow Functions With No Parameters

- if there are **no parameters**, an empty pair of parentheseses should be used:

  ```js
  const myName = () => {
    return "My name is Rodgers Nyangweso";
  };
  console.log(myName()); // Output: "My name is Rodgers Nyangweso"
  ```

## Arrow Functions With Default Parameter

- Arrow Function with _default parameters_:

  ```js
  // arrow function with default parameters
  let distanceInKm = (x, y = 1000) => {
    const distance = x / y;

    return `Distance in Km: ${distance}`;
  };

  console.log(distanceInKm(2));
  ```

## Arrow Functions With One Argument

- this new syntax is quite handy when you just need a simple function with _one argument_. you can skip typing `function` and `return`, as well as some parentheseses and `braces`.
- E.g.,
  ```js
  // the code below defines a function named greet that has one argument and returns a message
  const greetMe = (firstName) => "welcome " + firstName;
  console.log(greetMe("Rodgers")); // Output: welcome Rodgers
  ```
- OR,
  ```JS
      // Arrow function with one parameter
      const doubleDigit = y => y * 2;
      // OR:
      // const double = (y) => y * 2; console.log(double(2)); // Output: 4
  ```

# Resources
