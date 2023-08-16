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

# Error Handling in `js`
* `js` used `try...catch` construct to handle errors.

   ```js
      try {
         console.log("get's executed successfully without error");
         // no error here, so the catch will be skipped
      } catch (e) {
         console.log("no error, catch is skipped");
      };
   ```
* if the `try` block doesn't run successfully and leads to an error, then the code inside `catch` block will be executed.