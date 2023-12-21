# Handling Asynchronous Operations using `async/await`

## Table Of Contents

# Async/Await

- `async` and `await` make promises easier to write
- `async` makes a function return a **Promise**
  - The `async` keyword is for a function that is supposed to perform an asynchronous operation. It means the function may be taking a while before it finishes execution, returns a result, or throw an error.
- `await` makes a function wait and handle a **Promise**

# `Async` Syntax

- The keyword `async` before a function makes the function return a **promise**

  ```js
  const myFunction = async () => {
    // some operations
    return data;
  };
  ```

- So, what does the `async` function `myFunction` returns when we invoke it? It returns a **Promise**.

# Rules About `async/await`

1. Using `await` in a regular, non-async function will throw an exception
2. Function used after the `await` keyword may or maynot be an `async` function

# Handle Errors With `async/await`

- with `async/await` operation, we can handle errors with the traditional `try...catch`
- Example:
  - suppose we have a function which throws an error if `userId` amd `password` are blank.

# Examples

- Note:

  - when using `async`,

    ```js
    const myFunction = async () => {
      console.log("myFunction");
    };

    myFunction(); // Output: myFunction
    ```

  - is the same as

    ```js

    ```

## Use Case 1: User Authentication Using `async/await`

- Assume we have a function that validates if the `userId` and `puserPassword` are blank. If so, throw an error by rejecting the **promise**. Otherwise, resolve it with a success message.
  ```js
    // Validate User using async/Await Functiona
    const validateUser = ({ userId, userPassword }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (userId && userPassword) {
            resolve(`${userId} successfully authenticated`);
        } else {
            reject({ message: "Authentication failed" });
        }
        }, 2000);
    });
    };

    const app = async () => {
    const data = {
        userId: "Rodgers",
        userPassword: "Rodgers",
    };
    try {
        console.log("Initializing ...................");
        const result = await validateUser(data);
        console.log(result);
    } catch (err) {
        console.log(err.message);
    }
    };

    // invoke the function
    app()
  ``` 

# Resources

1. [w3schools - Async/Await](https://www.w3schools.com/js/js_async.asp)
