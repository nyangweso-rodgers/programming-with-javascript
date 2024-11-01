# `js` Functions

## Table Of Contents

# How to define `js` Functions

# Function Sequence

- js functions are executed in the sequence they are called and not in the sequence they are defined.
- example:

  ```js
  function myFirstFunction() {
    console.log("myFirstFunction");
  }

  function mySecondFunction() {
    console.log("mySecondFunction");
  }
  mySecondFunction();
  myFirstFunction();
  ```

- this example will end up with the `myFirstFunction` output

# Function Scope

- Functions in `js` are `block scoped`, meaning that any variable declared inside the function's blocks is part of the function's block scope and is not accessible outside of the function.
- default value expressions are evaluated at function call time from left to right. this also means that default expressions can use the values previously-filled parameterts.

  ```js
  // Functions with Default Parameters
  function test(a, b = 3, c = 4) {
    var result = a + b + c;
    return result;
  }
  console.log(test(5)); // Output: 12
  ```

# `js` Closure

- In `js`, **closure** provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
- For example

  ```js
  function greet() {
    // variable defined outside the inner function
    let name = "Rodgers";

    // inner function
    function displayName() {
      // accessing name variable
      return "Hi" + " " + name;
    }

    return displayName;
  }

  const g1 = greet();
  console.log(g1); // return the function definition
  console.log(g1()); // returns the value
  ```

- Advantages of using **closures** include:
  - **Closures** can be used to simulate private variables and methods
  - **closures** help in maintaining the state between function calls without using a global variable

# Anonymous functions

- **Anonymous function** is a function without a name. These types of functions are typically assigned to variables or passed as parameters to other functions. E.g.,

  ```js
  // example - anonymous function
  let double = (num) => num * 2;
  ```

- **Anonymous functions** are often used in the following scenarios:
  - They can be defined within another function call.
  - They can be stored in a variable.
  - They can be assigned to events.


# Resources

1. []()
