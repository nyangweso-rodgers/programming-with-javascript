# Handling Asynchronous Functions using Promises

## Table Of Contents

- Creating **Promises**

  - we create a Promise using a `Promise` Constructor which takes a function as its argument, called **executor function**
  - **executor function** starts the synchronous operation and **resolving** or **rejecting** the **promise**
  - Syntax 1:
    ```js
    // using Arrow Function
    const myPromise = new Promise((myResolved, myRejected) => {
      // Start the asynchronous operation
      myResolve("Value");
    });
    ```
  - Syntax 2:

    ```js
    // Promise Syntax
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(); // when successful
      myReject(); // when rejected
    });
    ```

- How to use a **promise**:

  - we use `then()` and `catch()` methods to consume a **promise**:
  - Syntax 1:
    ```js
    // consume a promise
    myPromise.then((value) => {
      // handle successful operation
    });
    ```
  - Syntax 2:
    ```js
    // how to use a promise
    myPromise.then(
      function (value) {
        /* code if successful */
      },
      function (error) {
        /* code if some error */
      }
    );
    ```
  - The `then()` method is used to handle the fulfilled **promise** and takes a **callback** function as an argument. The resolved value (or the result) of the **promise** is passed as an argument to this callback.
  - `Promise.then()` takes two arguments, a **callback** for **success** and another for **failure**. Both are optional, so you can add a **callback** for **success** or **failure** only.
  - The `catch()` method is used to handle a rejected promise and takes a callback function as an argument. The reason or error associated with the rejected promise is passed as an argument to this callback.
  - Usage:

    ```js
    // using Promise to fetch data from server
    const fetchData = new Promise((myResolve, myReject) => {
      // fetch data from server
      setTimeout(() => {
        const data = { id: 1, name: "Rodgers Nyangweo" };
        myResolve(data); // fulfilled promise using the fectched data
        // // myReject(new Error("Failed to fetch data")); // Alternatively, reject the promise with an error
      }, 2000);
    });
    fetchData
      .then((date) => {
        // Handle the fulfilled promise (access the resolved value)
        console.log("Fetched data:", data);
      })
      .catch((error) => {
        // Handle the rejected promise (access the error)
        console.log("Error:", error);
      });
    ```

# Examples Functions

1. Using **Function Declaration**

   ```js
   // Example
   function displayName(myName) {
     console.log(myName);
   }

   let myPromise = new Promise(function (myResolve, myReject) {
     let name = "Rodgers Nyangweso";

     // some code, //TODO: try and change the name to something
     if (typeof name === "string") {
       myResolve("OK");
     } else {
       myReject("Error");
     }
   });

   myPromise.then(
     function (value) {
       displayName(value);
     },
     function (error) {
       displayName(error);
     }
   ); // Output: OK
   ```

2. Using **Arrow Functions**

   ```js
   // Promises using Arrow Functions
   ```

3. Chaining **Promises**

# Use Case of Promise: using `setTimeout()`

- when using a **callback**, we have the following:

  ```js
  // displayName function using a callback
  function displayName(myName) {
    console.log(myName);
  }

  setTimeout(displayName, 2000, "Rodgers Nyangweso");
  ```

- when using a **Promise** object:

  ```js
  // using a Promise object to displayName
  let myPromise = new Promise(function (myResolve, myReject) {
    myResolve("Rodgers Nyangweo");
    setTimeout(myResolve, 2000, "Rodgers Nyangweo");
  });

  myPromise.then(function (value) {
    console.log(value);
  });
  ```

# Use Case 2: Fetch Data from Server/Database

```js
// using Promise to fetch data from server
const fetchData = new Promise((myResolve, myReject) => {
  // fetch data from server
  setTimeout(() => {
    const data = { id: 1, name: "Rodgers Nyangweo" };
    myResolve(data); // fulfilled promise using the fectched data
    // // myReject(new Error("Failed to fetch data")); // Alternatively, reject the promise with an error
  }, 2000);
});
```

# Mistakes when using Promises

1. Using promises for Synchronous operations
2. (Not)Handling Errors with Promises

# Resources

1. [6 Common mistakes in using JavaScript Promises](https://blog.greenroots.info/common-mistakes-in-using-javascript-promises)
