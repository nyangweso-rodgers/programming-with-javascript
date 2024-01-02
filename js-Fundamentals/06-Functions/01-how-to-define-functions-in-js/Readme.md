# How to Define Functions in JavaScript

## Table of Contents

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

- the above `divideFunctionWithArrow` function is equivalent to (using **Function Expression**):

  ```js
  // Functions with Function Expression
  let divideFunctionWithExpression = function (dividend, divisor) {
    const result = dividend / divisor;
    //return result;
    console.log("Result from Function Expression: " + result);
  };

  divideFunctionWithExpression(2, 2); // Output: 4
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
