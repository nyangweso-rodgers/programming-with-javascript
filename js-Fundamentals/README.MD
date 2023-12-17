# `JavaScript` Fundamentals

## Table Of Contents

- [Console Methods in `js`](#Console-Methods-in-`js`)
- [`alert`, `confirm`, and `confirm` Boxes in `js`](#`alert`,-`confirm`,-and-`confirm`-Boxes-in-`js`)
- [Error Handling in `js`](#Error-Handling-in-`js`)
- [Local vs. Session Storage in `js`](#Local-vs.-Session-Storage-in-`js`)
- [Promises in `js`](#Promises-in-`js`)
- [`js` Modules](#`js`-Modules)
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

- [Further Reading]()
  1. [JavaScript Modules – Explained with Examples](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/)

# Console Methods in `js`

1. Console Method 1: `console.log()`
   - prints the message on the console
     ```js
     const sampleObject = { firstName: "Rodgers", lastName: "Nyangweso" };
     console.log(sampleObject); // Output: { firstName: 'Rodgers', lastName: 'Nyangweso' }
     ```
2. Console Method 2: `console.error()`
   - outputs an error message in the console.
   - Helps in testing
     ```js
     console.error("This is an error message"); // Output: This is an error message
     ```
3. Console Method 3: `console.warn()`
   - outputs a warning message in the console
     ```js
     console.warn("This a warning!"); // output: This a warning!
     ```
4. Console Method 4: `console.time()`
   - measure how long a task in the code takes to run
   - `console.timeLog()` Outputs the current value of the time
   - `console.timeEnd()` stops timing the opration and outputs the final value of the timer
     ```js
     const message = "Time taken: ";
     console.time(message); // Output: undefined
     console.timeLog(message); // Output: Time taken: : 0.081ms
     console.timeEnd(message); // Output: Time taken: : 0.34ms
     ```
5. Console Method 5: `console..group()`

   - groups the message in the console. very helpful when there are too many messages
   - `console.groupEnd()` this ends the group which is initiated lastly
     ```js
     console.group("Group I");
     console.group("First message under Group I");
     console.group("Second message under Group I");
     console.group("This group will be made under Group I");
     console.log("First message under sub-group of I");
     console.groupEnd("Exits the subgroup");
     console.groupEnd("Exits Group I");
     console.groupEnd("Exits Group I");
     console.log(2);
     ```

6. Console Method 6: `console.table()`
   - outputs the array of objects in a clean and clear tabular form.
     ```js
     const people = [
       {
         firstName: "Rodgers",
         lastName: "Nyangweso",
         age: 28,
         location: "Nairobi",
       },
       {
         firstName: "Wilson",
         lastName: "Nyangweso",
         age: 57,
         location: "Kisumu",
       },
     ];
     console.table(people);
     ```
7. Console Method 7: `console.assert()`
   - outputs the message only when the condition (first argument) is evaluated as false
     ```js
     const year = 2022;
     console.assert(year > 2023, "This is true"); // Output: Assertion failed: This is true
     ```
8. Console Method 8: `console.trace()`

   - traces how the code ended up at a certain point. very helpful method as it simplifies the debugging process

     ```js
     function addition(x, y) {
       console.log(x + y);
     }

     function multiplication(x, y) {
       console.trace(x * y);
     }
     addition(2, 3); // Output: 5
     multiplication(2, 3);
     ```

9. Console Method 9: `console.count()`

   - outputs the number of times a call is called in the console
   - `console.countReset()` resets the counter

     ```js
     for (i = 1; i <= 2; i++) {
       console.count();
     }

     for (i = 1; i <= 2; i++) {
       console.count();
     }
     ```

10. Console Method 10: `console.dir()`
    - outputs the properties of the specified objects in the console
      ```js
      const person = { firstName: "Rodgers", lastName: "Nyangweso" };
      console.log(person); // Outputs: { firstName: 'Rodgers', lastName: 'Nyangweso' }
      console.dir(person); // Output:
      ```

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

# Local vs. Session Storage in `js`

- Both **local** and **session storage** are properties of the window object that let web applications store data locally within the user's browser.
  ```js
  myStorage = window.localStorage;
  /*myStorage object can be used to access the current origin's local storage space */
  ```
- In **Local Storage**:

  - data has no expiration date
  - When using **local storage** every tab with the same origin can access it's data.

- In **session storage**:
  - data gets cleared when the tab or browser is closed.
  - When using **session storage** every tab with the same origin creates a new session storage, **getItem('fruit')** can result in two different values in two tabs with the same origin.

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

# Promises in `js`

- **Promises** are used to handle **asynchronous** operations in `js`.
- They are easy to manage when dealing with multiple **asynchronous** operations where callbacks can create callback hell leading to unmanageable code.
- The most common use case of **Promise** is fetching data from a **REST API**. The **fetch API** from `js` returns a **Promise** because the `HTTP` request can take a lot of time and then we can call functions depending on whether the request succeeds or failed.

  ```js
  fetch("http://example.com/movies.json")
    // Handle success
    .then((response) => response.json())

    // Handle error
    .catch((error) => console.log(error));
  ```

* A **Promise** is in one of these states:
  - pending: initial state, neither fulfilled nor rejected.
  - fulfilled: meaning that the operation was completed successfully.
  - rejected: meaning that the operation failed.

- Syntax:

  ```js
      let myPromise = new Promise(function(myResolve, myReject) {
         // "Producing Code" (may take sometime)

         myResolve(); // when successful
         myReject(); // when error
      });

      // "Consuming Code" (Must wait for a fulfilled Proise)
      myPromise.then{
         function(value) {/* code if successful */}
         function(error) { /* code if some error */}
      }
  ```

- Benefits of **promises** include:
  - Improves Code Readability
  - Better handling of asynchronous operations
  - Better flow of control definition in asynchronous logic
  - Better Error Handling

# `js` Modules

- **Modules** refer to a file that holds `js` code which performs a specific purpose.
- **Modules** are self-contained, making it easy to add, remove, and update functionalities without affecting your entire code because they are decoupled from other pieces of code.
- Example:

  - Suppose we intent to build an e-commerce application which allows people and businesses to sell products online. This program will typically be composed of two or more unrelated tasks. For example,

    - a program for creating an account,
    - a program to validate the information,
    - another program to process payments
    - another program to calculate the user ratings
    - e.t.c.,

  - this is how our **main.js** file will look like:

    ```js
        function createAccount () {
            // code goes here
            function validateInfo ();
            function processPayment ();
            function calculateRating();
        }

        function validateInfo() {
            // code goes here
        }

        function processPayment() {
            // code goes here
        }

        function calculateRating() {
            // code goes here
        }
    ```

  - Instead of having all of those unrelated programs together in one module/file, it is a better practice to create several files, or modules, for each of those tasks. In such a case, the modules become dependencies. Then from the main app or program, you simply import/load the dependencies (i.e the modules you need) and execute them accordingly. As a result, your main app becomes cleaner and more minimal.

```

```
