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