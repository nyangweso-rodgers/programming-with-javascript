# Variables

## Table Of Contents

# Declaring Variables in JavaScript

- in **ES6**, we have three ways of declaring variables. the type of the declaration used depends on the necessary scope.

  - `var` defines a variable globally, or locally to an entire function regardless of block scope
    - the `var` keyword is almost the same as `let`. it also declares a variable but in an old fashioned way. there are subtle differences between "`var`" and "`let`"
  - `const`, have the same scope as variables declared using `let`, the difference is that `const` variables are **immutable** - not allowed to be reassigned
  - `let`, allows you to declare variables that are limited in scope to the block statement, or expression in which they are used.

    ```js
    let myName = "Rodgers";
    let myArray = [1, 2, 3];

    let myObject = {
      firstName: "Rodgers",
      lastName: "Nyangweso",
    };
    ```

## Remarks

- Hoisting is not possible using `let`
- When the value of a variable is changed, the old data is removed from the variable

  ```js
  let message1;
  message1 = "old variable";
  message1 = "new variable";

  console.log(message1); // Output: 'new variable'
  ```

- we can also declare two variables and copy data from one into the other

  ```js
  let firstName = "rodgers";
  let secondName;

  // copy 'rodgers' from firstName into secondName
  secondName = firstName;

  // now, two variabels hold the same data
  alert(firstName);
  alert(secondName); // Output: 'rodgers'
  ```

# Variables Scope

- **Scope** determines the accessibility (visibility) of the **variables**. 3 types of **scope** include:
  - Block scope
  - Global scope, and
  - Function/Local scope

## Block Scope

- **Block scope**: means declaring `variables` inside a block or curly brackets `{}`. Trying to access it outside the block throws an error.
- **Variables** declared with the `let` keyword can NOT have block scope.
- Case 1:

  ```js
  {
    var estate = "Kitengela";
  }
  console.log(estate); // Output: Kitengela
  ```

- Case 2:

  ```js
  {
    let country = "Kenya";
  }
  console.log(country); // ReferenceError: country is not defined
  ```

## Global Scope

- **Global Scope**: variables declared Globally (outside any function) have a **Global Scope**. Global variables can be accessed from anywhere in a `JS` program.

  ```js
  let myMessage = "This is a global variable";

  function myFunction() {
    console.log(myMessage);
    // code here can also be used
  }
  console.log(myMessage);
  ```

## Function/Local Scope

- **Function (Local) Scope**: variables defined inside a `function` are not accessible (visible) from outside the `function`.
- Example:

  ```js
  // Here, we CANNOT use the Name variable
  function myFunction() {
    let Name = "Rodgers";
    // Here, we can use the Name variable
  }
  // Here we cannot use the Name variable
  ```

- Variables declared within a function are known as **local variables**. Variables declared with `var`, `let`, and `const` are pretty similar when declared inside a function. They all have a **Function Scope**.

# Variable Hoisting

- **Hoisting** is a `js` behavior in which a `function` or **variable** can be accessed or used before the declaration.But it's not going to work with `let` and `const` keywords but only works with `var` keyword.

- `js` "initialization" is not hoisted but "declarations" are hoisted. See in this example, the only declaration is hoisted not the value. Variable declared with "`var`" keyword is initialized with "undefined" value by default.

  ```js
  // js variable hoisting
  console.log(my_country); // Output: undefined

  var my_country = "Kenya";
  ```

  ```js
  console.log(sumArrow(10, 20)); // sumArrow is not a function
  console.log(sumArrow); // undefined

  var sumArrow = (x, y) => {
    return x + y;
  };
  ```
