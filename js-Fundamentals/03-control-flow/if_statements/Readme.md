# js if statement

## Table of Contents

# `if else statements` Description
* `if Statements` are used to specify a block of code that will be executed if a specified condition is true:

    ```js
        // this statement will be executed only if a specified conditin is true
    if (condition) {
        statements;
    };
    ```
* you can use the `else if statement` to specify a new condition if the first condition is FALSE

# Task 1: Compare two numbers with an `if statement`
```js
    var a = 7;
    var b = 10;

    if (a < b) {
        console.log("JS is starting to get easier");
    };
```

# Task 2: Compare two numbers with an `if else statement`
```js
    // else statement
    var a = 7;
    var b = 10;

    if (a > b) {
        console.log("A is greater than B");
    }
    else {
        console.log("A is less than B");
    }; // A is less than B
```

# Task 3: Compare two numbers using `?` Operator
```js
    // using ? operator
    var a = 7;
    var b = 10;
    a > b? console.log("A is greater than B"): console.log("Not Allowed!"); // Not Allowed
```

# Task 4: Use `else if statement`
```js
    // else if statement
    var dayOfWeek = 'Monday';

    if (dayOfWeek == 'Monday') {
        console.log(`Today is ${dayOfWeek}, we are eating Pizza and Soda`);
    }
    else if (dayOfWeek == 'Tuesday') {
        console.log(`Today is ${dayOfWeek}, we are eating Ugali and Kales`);
    }
    else {
        console.log("Day is not specififed");
        // THE FINAL else block will be executed when none of the conditions is true
    };
```