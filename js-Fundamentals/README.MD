# `JavaScript` Fundamentals

## Table Of Contents

- [JavaScript Fundamentals]()
  1. [JavaScript Variables](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/js-Variables)
     1. Variable Declarations (`var`, `let`, and `const`)
     2. Variable Scope (`block`, `global` and `Function/Local` scopes)
     3. Variable Hoisting
  2. [JavaScript Data Types]()
  3. [JavaScript Control Structures](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/js-control-flow)
     1. `do...while` loop
     2. `for` loop
     3. `if` statements
     4. `swicth` statements
     5. `while` loop
  4. [JavaScript Functions](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/js-Functions)
     1. [How to Define Functions]()
        1. `function declarations`
        2. `function constructors`
        3. `function expressions`
        4. `arrow functions`

# `alert`, `confirm`, and `confirm` Boxes in `js`

- `alert`:

  - an `alert` box is used when you want to ensure that information gets through to the user.
  - when an `alert` box pops up, the user must click `OK` to proceed.
  - the `alert` function takes a single parameter, which is the text displayed on the pop up boxes.

  ```js
  alert("Dou you really love me?");

  // to display line breaks within a popup box, use the backlash followed by the character n
  alert("do you really love him?\nmaybe");
  ```

- `prompt`:

  - the `prompt` often used to have a user input a value before entering a page.
  - when a **prompt box** pops up, the user will have to click `Ok` or `Cancel` to proceed after entering the input value. if the user clicks `OK`, the box returns the input value if the user clicks `CANCEL`, the box returns null.

  ```js
  // the prompt() method takes two parameters:
  // .the first is the label, which you want to display in the text box
  // .the second is a default string to display in the text box (optional)
  var user = prompt("kindly, enter your name to proceed");
  alert(user);
  ```

- `confirm`:

  - `confirm` box is often used to have the user verify or accept something.
  - when a `confirm` box pops up, the user must either click `OK` or `Cancel` to proceed.

  ```js
  // ..if the user clicks OK, the box returns true.
  // .if the user clicks Cancel. the box returns false
  var result = confirm("do yoy really want to leave this page?");
  if (result == true) {
    alert("Thank you for visiting this page");
  } else {
    alert("Thank for staying with us.ENJOY OUR SITE");
  }
  ```

# Error Handling in `js`

- `js` use `try...catch` construct to handle errors.

  ```js
  try {
    console.log("get's executed successfully without error");
    // no error here, so the catch will be skipped
  } catch (e) {
    console.log("no error, catch is skipped");
  }
  ```

- if the `try` block doesn't run successfully and leads to an error, then the code inside `catch` block will be executed.
