# Handking Asynchronous Functions

## Table Of Contents

# Handling Asynchronous Functions 1: Callbacks

- **Callback** is a function that is passed as a **parameter** to another function and then invoked or executed inside that function.
- **Callback** is commonly used in JavaScript's **asynchronous** operations to provide **synchronous** functionality. A typical example is JavaScript `setTimeout()`

# Handling Asynchronous Functions 2: Promises

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

# Handling Asynchronous Functions 3: `Asyc`/`Await`

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
