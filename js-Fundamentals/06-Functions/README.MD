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

# Recursive Functions

- `Recursion` is a process of calling itself. A `function` that calls itself is called a `recursive function`. A `recursive function` always has a condition that stops the function from calling itself.

- To prevent infinite recursion, you can use `if...else statement` where one branch makes the recursive call, and the other doesn't.

# `require()` function

- `require()` function is a built-in `CommonJS` module function supported in `Node.js` that lets you include modules within your project. This is because, by default, `Node.js` treats JavaScript code as `CommonJS` modules.
- How to Use the `require()` Function in JS

  ```js
  // Syntax: require
  var varName = require(localName);
  ```

# Synchronous and Asynchronous Functions

## Synchronous Functions

- **Blocking Execution**: In a **synchronous** execution model, each operation is performed one after the other in a sequential manner. If one operation takes time to complete (e.g., a network request or a file read), the entire program execution is blocked until that operation finishes.
- **Sequential Flow**: **Synchronous** functions have a straightforward, sequential flow. Each line of code is executed in order.

## Asynchronous Functions

- **Non-blocking Execution**: **Asynchronous** functions allow operations to be initiated and continue processing other tasks without waiting for the completion of the asynchronous operation.
- **Event-Driven**: **Asynchronous** operations are often used in event-driven environments, such as handling user input, responding to network requests, or reading files.
- `js` provides several mechanisms for handling asynchronous code:
  1. Callbacks
  2. Promises, and
  3. `Async/Await`
- **Asynchronous** programming allows developers to create responsive and efficient applications by avoiding unnecessary blocking.

### Handling Asynchronous Functions 1: Callbacks

- `Callback` is a function that is passed as a **parameter** to another function and then invoked or executed inside that function.
- `Callback` is commonly used in JavaScript's **asynchronous** operations to provide synchronous functionality. A typical example is JavaScript `setTimeout()`

### Handling Asynchronous Functions 2: Promises

- **Promises** are used to handle **asynchronous** operations in `js`.
- They are easy to manage when dealing with multiple **asynchronous** operations where **callbacks** can create callback hell leading to unmanageable code.
- The most common use case of **Promise** is fetching data from a **REST API**. The **fetch API** from `js` returns a **Promise** because the `HTTP` request can take a lot of time and then we can call functions depending on whether the request succeeds or failed.

  ```js
  fetch("http://example.com/movies.json")
    // Handle success
    .then((response) => response.json())

    // Handle error
    .catch((error) => console.log(error));
  ```

* A **Promise** is in one of these states:
  - **pending**: initial state, neither fulfilled nor rejected.
  - **fulfilled**: meaning that the operation was completed successfully.
  - **rejected**: meaning that the operation failed.

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

### Handling Asynchronous Functions 3: `Asyc`/`Await`

- `async` function is a function declared with the `async` keyword that makes a normal function to return a `promise`.
- Suppose you have a simple or regular `function`:

  ```js
  function show() {
    return "hello";
  }
  ```

- Then you added the `async` hello keyword before it. Now it will return you a promise instead of a simple value return "hello"; after printing.

  ```js
  async function print() {
    return "hello";
  }
  ```

- Because the code the above code is the same as the below:

  ```js
  function show() {
    return new Promise((resolve, reject) => {
      resolve("hello");
    });
  }
  ```

- You could say `async` made it easier to write `promises` without writing the `promise` syntax.
- `Await` is a keyword that makes the `async function` wait for the `promise` inside it to complete its execution.
- It can't be used in a regular function or anywhere in the code other than `async` function.
- wherever `await` is used inside an `async` function, `await` will put the `async` function on hold until the p`romise inside the `async` function has finished running.
- However, when `await` places the `async` function on hold, it will send the control to execute the statements after the async function so that promise can finish running in that time.

# Types of JS Functions

1. **eval() function**: You can get the result of a **string expression** using the **eval() function**, which takes a string expression argument and returns the result. If the argument is empty, it returns **undefined**.

```js
eval("10 * 20 + 8"); // 208
```

2. **document.write() function**: writes a _string_ to the **HTML** document. This function can be used to write _text_, _HTML_, or Both. The **document.write()** method should be used for testing.

```js
document.write("This is a document dot write function");

// Just like HTML, we can use HTML tags to format texts in JS. we can output the text as a heading
document.write("Hello, world!");
document.write("<h1>Using document dot write function to format texts</h1>");
```

# Resources

1. []()
