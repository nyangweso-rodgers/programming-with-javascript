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
