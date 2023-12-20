# Handling Asynchronous Functions using Promises

## Table Of Contents

- Syntax:

  ```js
  // Promise Syntax
  let myPromise = new Promise(function (myResolve, myReject) {
    myResolve(); // when successful
    myReject(); // when rejected
  });

  // Consuming code (must wait for fulfilled promise)
  function(value) {
    /* code if successful */
  }
  function(error) {
    /* code if some error */
  }
  ```

- How to use a **promise**

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

  - `Promise.then` takes two arguments, a **callback** for success and another for failure
  - Both are optional, so you can add a **callback** for success or failure only.

- Examples:

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
