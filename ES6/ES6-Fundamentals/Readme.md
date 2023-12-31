# `ES6` Fundamentals

## Table of Contents
- [Further Reading]()
    1. [w3Schools - Javascript ES6](https://www.w3schools.com/js/js_es6.asp)



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