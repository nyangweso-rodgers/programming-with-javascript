# Control Flow In JS

## Table Of Contents


# if Statements
* use if to specify a block of code that will be executed if a specified condition is true:

    ```js
        // this statement will be executed only if a specified conditin is true
    if (condition) {
        statements;
    };
    ```

# else statement
```js
    // syntax
    if (condition) {
        // executed if conditon is true
    }
    else {
        // executed if conditon is false
    }
    // you can skip the curly braces if your code under tyhe condition contains only one command
```

# else if statement
* you can use the __else if statement__ to specify a new condition if the first condition is FALSE

# switch statement
* in cases when you need to test for multiple conditions, writing _if else statements_ for each condition might not be the best solution. the _switch statement_ is used to perform  different actions based on the different conditions.

# for loops
* __loops__ can execute a block of code a number of times. they are handy in cases in which you want to run the same code repeatedly,adding a different value each time. JS has three types of loops:
    * for, 
    * while, and 
    * do while.