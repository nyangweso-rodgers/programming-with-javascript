# JavaScript Modules

## Table of Contents

# Getting Started with JavaScript Modules

- **Modules** refer to a file that holds JavaScript code which performs a specific purpose.
- **Modules** are self-contained, making it easy to add, remove, and update functionalities without affecting your entire code because they are decoupled from other pieces of code.
- Example:

  - Suppose we intent to build an e-commerce application which allows people and businesses to sell products online. This program will typically be composed of two or more unrelated tasks. For example,

    - a program for creating an account,
    - a program to validate the information,
    - another program to process payments
    - another program to calculate the user ratings
    - e.t.c.,

  - this is how our **main.js** file will look like:

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

  - Instead of having all of those unrelated programs together in one module/file, it is a better practice to create several files, or modules, for each of those tasks. In such a case, the modules become dependencies. Then from the main app or program, you simply import/load the dependencies (i.e the modules you need) and execute them accordingly. As a result, your main app becomes cleaner and more minimal.

# Resources
