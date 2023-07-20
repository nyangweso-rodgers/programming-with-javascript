# Functional Programming in JavaScript

## Table Of Contents
1. [5 Ways to Define Functions in JS]()
    1. [Function Expression](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/5-Ways-to-Define-Functions-in-JS/Function-Expression)
    2. [Function Declaration](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/5-Ways-to-Define-Functions-in-JS/Function-Declaration)
    3. [Arrow Function](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/5-Ways-to-Define-Functions-in-JS/Arrow-Function)
    4. [Function Constructor](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/5-Ways-to-Define-Functions-in-JS/Function-Constructor)
    5. [IIEF Functions](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/5-Ways-to-Define-Functions-in-JS/IIEF-Function)

2. [Higher Order Functions](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/Higher-Order-Functions)
   1. forEach()
   2. map()
   3. filter()
   4. reduce()

3. [JavaScript Functions Programs](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/Programs-with-Functions)
   1. [FizzBuzz Function](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/Programs-with-Functions/FizzBuzz-Function)
   2. [Random Number Generator Program](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/Programs-with-Functions/Random-Number-Generator-Function)
   3. [Reverse Character Function Program](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/Programs-with-Functions/Reverse-Character-Function)
   4. [Countdown Function](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/Programs-with-Functions/countdown-function)
   5. [Sum of Natural Numbers Program](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-Fundamentals/Functional-Programming-in-JS/Programs-with-Functions/sum-of-natural-numbers-using-recursion)

# Introduction

# Syntax
```js
    function exampleFunction() {
        console.log("example function");
    };
```

* Functions can also be assigned to variables, i.e., `Function Expression`

    ```js
        var x = function exampleFunction() {
            console.log("example function");
        }
    ```

# Function Scope
* Functions in JavaScript are `block scoped`, meaning that any variable declared inside the function's blocks is part of the function's block scope and is not accessible outside of the function.
# Anonymous functions
* `Anonymous function` is a function without a name. These types of functions are typically assigned to variables or passed as parameters to other functions. E.g., 

    ```js
        // example - anonymous function
        let double = (num) => num * 2;
    ```
* `Anonymous functions` are often used in the following scenarios:
  * They can be defined within another function call.
  * They can be stored in a variable.
  * They can be assigned to events.

# `Aync`/`Await` Functions
* `async` function is a function declared with the `async` keyword that makes a normal function to return a `promise`.
* Suppose you have a simple or regular `function`:
    ```js
        function show() {
            return "hello";
        }
    ```

* Then you added the `async` hello keyword before it. Now it will return you a promise instead of a simple value return "hello"; after printing.

    ```js
        async function print() {
            return "hello"
        }
    ```
* Because the code the above code is the same as the below:

    ```js
        function show() {
            return new Promise((resolve, reject) => {
                resolve("hello");
            });
        };
    ```
* You could say `async` made it easier to write `promises` without writing the `promise` syntax.
* `Await` is a keyword that makes the `async function` wait for the `promise` inside it to complete its execution.
* It can't be used in a regular function or anywhere in the code other than `async` function.
* wherever `await` is used inside an `async` function, `await` will put the `async` function on hold until the p`romise inside the `async` function has finished running.
* However, when `await` places the `async` function on hold, it will send the control to execute the statements after the async function so that promise can finish running in that time.

# Callback Functions
* `Callback` is a function that is passed as a parameter to another function and then invoked or executed inside that function. `Callback` is commonly used in JavaScript's asynchronous operations to provide synchronous functionality.

# Recursive Functions
* `Recursion` is a process of calling itself. A `function` that calls itself is called a `recursive function`. A `recursive function` always has a condition that stops the function from calling itself. 

* To prevent infinite recursion, you can use `if...else statement` where one branch makes the recursive call, and the other doesn't.

# `require()` function
* `require()` function is a built-in `CommonJS` module function supported in `Node.js` that lets you include modules within your project. This is because, by default, `Node.js` treats JavaScript code as `CommonJS` modules.
* How to Use the `require()` Function in JS

    ```js
        // Syntax: require
        var varName = require(localName);
    ```
# Types of JS Functions
1. __eval() function__: You can get the result of a __string expression__ using the __eval() function__, which takes a string expression argument and returns the result. If the argument is empty, it returns __undefined__.
```js
    eval("10 * 20 + 8"); // 208
```
2. __document.write() function__: writes a _string_ to the __HTML__ document. This function can be used to write _text_, _HTML_, or Both. The __document.write()__ method should be used for testing.
```js
    document.write('This is a document dot write function');

    // Just like HTML, we can use HTML tags to format texts in JS. we can output the text as a heading
    document.write("Hello, world!");
    document.write("<h1>Using document dot write function to format texts</h1>")
```