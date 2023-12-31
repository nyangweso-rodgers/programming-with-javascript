# Handling Asynchronous Functions using Promises

## Table Of Contents

# Understanding JavaScript Promises

- **Promises** are used to handle asynchronous operations in JavaScript.
- A **promise** is a JavaScript object that links **producing** code and **consuming** code.
  - **Producing** code is code that can take some time.
  - **Consuming** code is code that must wait for some time.
- When the executing code obtains the result, it should call one of the two **callbacks**:
  - `resolve(value)`: If the promise is resolved successfully, the result is the `value`
  - `reject(error)`: If an error occurred, error is the `error` object.

# How to create a Promise

- we create a **Promise** using a `Promise` Constructor which takes two parameters, one for **success(resolve)** and the other for **failure(reject)**. There will be a condition. If the condition is met, the **Promise** will be **resolved**, otherwise, it will be **rejected**.
- Example:

  - suppose, a company promise to pay bonuses if the employees achieve a certain target.

    ```js
    // Example: Promises in action
    let targetAchieved = false;

    const unlockBonus = new Promise((myResolve, myReject) => {
      if (targetAchieved) {
        const success = "Congratulations, you have unlocked Monthly Bonus!";
        myResolve(success);
      } else {
        const failure = "Unable to unlock Monthly Bonus!";
        myReject(failure);
      }
    });

    // To use the promise, you need to handle the resolution and rejection using `.then` and `.catch`
    unlockBonus
      .then((message) => {
        console.log(message); // Handle success
      })
      .catch((errorMessage) => {
        console.log(errorMessage); // Handle error
      });
    ```

  - **note**: the promise chacks if the `targetAchieved` and if it is true, the promise goes to a resolved state because the resolve callback was called, otherwise the reject callback is called that puts the promise in a rejected state. If none of these functions is called, the promise will remain in a pending state.

- Syntax 1 (using **Arrow Functions**):
  ```js
  // using Arrow Function
  const myPromise = new Promise((myResolved, myRejected) => {
    // Start the asynchronous operation
    myResolve("Value");
  });
  ```

# How to use a Promise

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

# Real World Use Cases of a Promise

## Using Promises with Timeout and Delays

- **Promises** can be combined with `setTimeout` to create delays:

  ```js
  // Using Promises with setTimeout() and Delays

  const displayName = new Promise((myResolve, myReject) => {
    myResolve("Rodgers Nyangweso");
    setTimeout(myResolve, 2000, "Rodgers Nyangweso");
  });

  displayName.then((value) => {
    console.log(value);
  });
  ```

## Fetching Data from APIs

- The `fetch` API returns a Promise that resolves to the response:
  ```js
  //
  fetch("example.com")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  ```

## Reading/Writing Files with `Node.js`

- The `fs.promises` the module provides Promisified file system functions:
  ```js
  // reading/Writing files in Node.js
  const fs = require("fs");
  fs.readFile("example.js", "utf8")
    .then((data) => {
      console.log("File contents: ", data);
    })
    .catch((err) => {
      console.error("Error reading a file: ", err);
    });
  ```

## Promises in Browser APIs

- Browser APIs often return Promises. For example, the `geolocation` API's

  ```js
  //
  let getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error("Geolocation not supported"));
      }
    });
  };

  getUserLocation()
    .then((position) => {
      console.log("User location", position.coords);
    })
    .catch((error) => {
      console.error("Error while getting geolocation data: ", error);
    });
  ```

- trying to run the above code in VS code throws an exception: "**Error while getting geolocation data: ReferenceError: navigator is not defined**"
  - The error typically occurs when the navigator object is not available. This can happen in environments where the navigator object is not supported or when running the code in a context that does not have access to browser features, such as a Node.js environment.
  - To avoid this error, make sure your code is running in a browser environment that supports geolocation. If you're using this code in a Node.js environment, you might want to consider using a library that simulates geolocation or find an alternative solution that fits your specific use case.

# Mistakes when using Promises

1. Using promises for Synchronous operations
2. (Not)Handling Errors with Promises

## Use Case 4: User Authentication Using Promise

- Assume we have a function that validates if the `userId` and `password` are blank. If so, throw an error by rejecting the **promise**. Otherwise, resolve it with a success message.

  ```js
  // Authenticate User using a Promise
  const validateUser = ({ userId, userPassword }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId && userPassword) {
          resolve(`${userId} Successfully authenticated`);
        } else {
          reject({ message: "Authentication failed" });
        }
      }, 2000);
    });
  };

  const app = () => {
    inputData = {
      userId: "Rodgers Nyangweso",
      userPassword: "testPassword",
    };
    validateUser(inputData)
      .then((result) => {
        console.log("Initializing ...");
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  app();
  ```

# Resources

1. [6 Common mistakes in using JavaScript Promises](https://blog.greenroots.info/common-mistakes-in-using-javascript-promises)
