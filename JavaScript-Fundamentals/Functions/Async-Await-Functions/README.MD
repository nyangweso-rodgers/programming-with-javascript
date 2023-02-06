# Async/Await Functions

# Introduction to Aync/Await Functions
* An __async function__ is a function declared with the `async` keyword that makes a normal function to return a promise.

# Syntax
```js
    async function name(parameters) {
        // statements
    }
```
* Suppose you have a simple or regular function:
    ```js
        function show() {
            return "hello";
        }
    ```

* Then you added the __async__ hello keyword before it. Now it will return you a promise instead of a simple value return "hello"; after printing.

    ```js
        async function print() {
            return "hello"
        }
    ```

# Why async gives a promise?
* Because the code the above code is the same as the below:

    ```js
        function show() {
            return new Promise((resolve, reject) => {
                resolve("hello");
            });
        };
    ```
* You could say async made it easier to write promises without writing the promise syntax.

# What is Await?
* __Await__ is a keyword that makes the __async function__ wait for the promise inside it to complete its execution.
* It can't be used in a regular function or anywhere in the code other than async function.
* wherever await is used inside an async function, await will put the async function on hold until the promise inside the async function has finished running.
* However, when await places the async function on hold, it will send the control to execute the statements after the async function so that promise can finish running in that time.