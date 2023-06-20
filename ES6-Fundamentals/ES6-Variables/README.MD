# Variables in ES6

## Table Of Contents
- [Variables in ES6](#variables-in-es6)
  - [Table Of Contents](#table-of-contents)
- [Introduction to `Variables` in `ES6`](#introduction-to-variables-in-es6)
- [`Template Literals` in `ES6`](#template-literals-in-es6)

# Introduction to `Variables` in `ES6`
* in ES6, we have three ways of declaring variables. the type of the declaration used depends on the necessary scope. __Scope__ is the fundamental concept in all programming languages that defines the visibility of a variable.

    ```js
        // var defines a variable globally, or locally to an entire function regardless of block scope
        var a = 10;

        // const, have the same scope as variables declared using let, the difference is that const variables are immutable - not allowed to be reassigned
        const b = 'hello';

        // let, allows you to declare variables that are limited in scope to the block statement, or expression in whcich they are used.
        let c = true;
    ```

# `Template Literals` in `ES6`
* `Template literals` are a way to output `variables` in a string.
* Prior to `ES6` we had to break the `string` for example:
  
    ```js
        let name = 'David';
        let msg = 'welcome';
        msg = msg + ' ' + name + '!';
        console.log(msg); // Output: welcome David!
    ```
* `ES6` intoduces a new way of outputting `variable` values in `strings`. the same code above can be written as:
    ```js
        let name = 'David';
        let msg = `welcome ${name}!`;
        console.log(msg); // Output: welcome David!
    ```