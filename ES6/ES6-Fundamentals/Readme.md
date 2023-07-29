# `ES6` Fundamentals

## Table of Contents
- [Further Reading]()
    1. [w3Schools - Javascript ES6](https://www.w3schools.com/js/js_es6.asp)

# Introduction to `ES6`
* `ECMAScript` (`ES`) is a scripting language specification created to standardize `JavaScript`. 
* The sixth edition, initially known as `ECMAScript 6` (`ES6`) and later renamed to `ECMAScript 2015`, adds significant new syntax for writing complex applications.

# New Features in `ES6`
1. `let` and 
2. `const` keywords
3. Arrow Functions
4. The ... Operator
5. `For/of`
6. Map Objects
7. Set Objects
8. Classes
9. Promises
10. Symbol
11. Default parameters
12. Function Rest Parameter
13. `String.includes()`
14. `String.startswith()`
15. `String.endswith()`
16. `Array.from()`
17. Array `keys()`
18. Array `find()`
19. Array `findIndex()`
20. New `Math` Methods
21. New Number Properties
22. New Number Methods
23. New Global Methods
24. Object entries
25. JavaScript Modules

* i.e., `ES6` is a superset of `JavaScript` (`ES5`). the reason that `ES6` became so popular is that it introduced new conventions and OOP concepts such as classes.

# Variables with `let` and `const`
* in `ES6`, we have three ways of declaring variables. the type of the declaration used depends on the necessary scope.
  * `var` defines a variable globally, or locally to an entire function regardless of block scope
  * `const`, have the same scope as variables declared using `let`, the difference is that `const` variables are immutable - not allowed to be reassigned
  * `let`, allows you to declare variables that are limited in scope to the block statement, or expression in which they are used.

    ```js
        let myName = "Rodgers";
        let myArray = [1, 2, 3];

        let myObject = {
            firstName: "Rodgers",
            lastName: 'Nyangweso'
        };
    ```
* _Remarks_:
  * Hoisting is not possible using `let`

# Template Strings/Literals in `ES6`
* `Template literals` are a way to output `variables` in a string.
* Prior to `ES6` we had to break the `string`, Example:

    ```js
        let firstName = "Rodgers";
        let lastName = "Nyangweso";
        const myName = firstName + " " + lastName;

        console.log(myName); // Output: "Rodgers Nyangweso"
    ```
* `ES6` intoduces a new way of outputting `variable` values in `strings`. the same code above can be written as:

    ```js
        // Template Literals
        let firstName = "Rodgers";
        let lastName = "Nyangweso";

        const myName = `${firstName} ${lastName}`
        console.log(myName); // Output: "Rodgers Nyangweso"
    ```

# Arrow Functions in `ES6`
* prior to `ES6`, a __JS function__ was defined like this:
    ```js
        let firstName = "Rodgers";
        let lastName = "Nyangweso";

        function displayFullName(firstName, lastName) {
        const fullName = `${firstName} ${lastName}`;
        return fullName;
    };

    console.log(displayFullName(firstName, lastName)); // Output: "Rodgers Nyangweso"
    ```
* __Arrow Functions__ provide a more coincise syntax for writing functions expressions by removing the "__function__" and "__return__" keywords. 
* __Arrow Functions__ are defined using the __fat arrow__ (=>) notation.

    ```js
        let firstName = "Rodgers";
        let lastName = "Nyangweso";

        // Arrow Functions
        let displayFullName = (firstName, lastName) => {
            const fullName = `${firstName} ${lastName}`;

            return fullName;
        };

        console.log(displayFullName(firstName, lastName)); // Output: "Rodgers Nyangweso"
    ```

* if there are _no parameters_, an empty pair of parentheseses should be used:

    ```js
        const x = () => {
            return "My name is Rodgers Nyangweso";
        };
        console.log(x()); // Output: "My name is Rodgers Nyangweso"
    ```

* this new syntax is quite handy when you just need a simple function with _one argument_. you can skip typing `function` and `return`, as well as some parentheseses and `braces`. E.g.,
  
    ```js
        // the code below defines a function named greet that has one argument and returns a message
        const greetMe = firstName => "welcome " + firstName;
        console.log(greetMe("Rodgers")); // Output: welcome Rodgers
    ```
* Arrow Function with _default parameters_:

    ```js
        // arrow function with default parameters
        let distanceInKm = (x, y = 1000) => {
            const distance = x / y;

            return `Distance in Km: ${distance}`
        };

        console.log(distanceInKm(2));
    ```
* _Remark_:
    - _this syntax is very useful for inline functions._
    - for example: _let's say we have an array and for each element of the array we need to execute a function we use the `forEach` method of the `array` to call a function for each element_

        ```js
        var arr2 = [2, 3, 7, 8];
        arr2.forEach(function(el) {
            console.log(el * 2)
        }); // Output: 4, 6, 49, 64

        // however, in ES6, the code above can be rewritten as following which is shorter and looks pretty nice
        const arr3 = [2, 3, 7, 8];
        arr3.forEach(v => {
            console.log(v * 2)
        }); 
    ```

# Searching `strings` in ES6
* before `ES6`, we only used the `indexOf()` method to find the position of the text in the string.

    ```js
        let firstName = "Rodgers";
        let lastName = "Nyangweso";

        let myFullName = `${firstName} ${lastName}`;
        console.log(myFullName); // Output: "Rodgers Nyangweso"
        console.log(myFullName.indexOf("Rod") === 0); // Output: true
    ```
* `ES6` has replaced this with a version that has a cleaner and more simplified syntax:

    ```js
        let myFullName = `${firstName} ${lastName}`;
        console.log(myFullName); // Output: "Rodgers Nyangweso"

        console.log(myFullName.startsWith("Rod")); // Output: true
        console.log(myFullName.startsWith("rod")); // Output: false
        console.log(myFullName.startsWith("Rod", 0)); // Output: true
        console.log(myFullName.startsWith("Rod", 1)); // Output: false
        console.log(myFullName.endsWith("eso")); // Output: true
        console.log(myFullName.includes("Rod")); // Output: true
    ```