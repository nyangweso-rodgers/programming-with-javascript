# JavaScript Modules

## Table Of Contents
- [Further Reading]()
    - [JavaScript Modules – Explained with Examples](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/)

* __Modules__ refer to a file that holds JavaScript code which performs a specific purpose. __Modules__ are self-contained, making it easy to add, remove, and update functionalities without affecting your entire code because they are decoupled from other pieces of code.

* When you have these modules in separate JavaScript files, you'll want to use them within the original JavaScript file.

# Features of Modules
* __Independent/Self-contained__: A module has to be as detached from other dependencies as possible.

* __Specific__: A module needs to be able to perform a single or a related group of tasks. The core essence of creating them in the first place is to create separate functionalities. One module, one (kind of) task.

* __Reusable__: A module has to be easy to integrate into various kinds of programs to perform its task.

# Example of a Module
* Suppose we intent to build an e-commerce application which allows people and businesses to sell products online. This program will typically be composed of two or more unrelated tasks. For example,

    - a program for creating an account,
    - a program to validate the information,
    - another program to process payments
    - another program to calculate the user ratings
    - e.t.c.,

* this is how our __main.js__ file will look like:
```js
    function createAccount () {
        // code goes here
        function validateInfo ();
        function processPayment ();
        function calculateRating();
    }

    function validateInfo() {
        // code goes here
    }

    function processPayment() {
        // code goes here
    }

    function calculateRating() {
        // code goes here
    }
```

* Instead of having all of those unrelated programs together in one module/file, it is a better practice to create several files, or modules, for each of those tasks. In such a case, the modules become dependencies.

* Then from the main app or program, you simply import/load the dependencies (i.e the modules you need) and execute them accordingly. As a result, your main app becomes cleaner and more minimal.

# JavaScript Modules
* In JavaScript, we use the __import__ and __export__ keywords to share and receive functionalities respectively across different modules.

* The __export__ keyword is used to make a variable, function, class or object  accessible to other modules. In other words, it becomes a public code.

* The __import__ keyword is used to bring in public code from another module.