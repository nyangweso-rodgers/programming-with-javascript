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

    ```js
        // syntax
        switch (expression) {
            case n1:
                statements
                break // when JS code reaches a break keyword, it breaks out of the switch block .this will stop the executuion of more code and case testing inside the block
            case n2:
                statements
                break; // usually, a break should be put in each case statement
            default: // the default keyword specifies the code to run if there is no case match
                statements
        }
    ```
* the __switch expression__ is evaluated once. The value of the expression is compared with the values of each case. if there is a match, the associated block of code is executed.

# for loops
* __loops__ can execute a block of code a number of times. they are handy in cases in which you want to run the same code repeatedly,adding a different value each time. JS has three types of loops:
    * for, 
    * while, and 
    * do while.

    ```js
    // syntax
    for (statement 1: statemtn 2: statement 3) {
        // code block to be executed
    };
    // statement 1 is executed before the loop  (the code block) starts
    // statement 2 defines the condition for running the loop (the code block)
    // statement 3 is executed each time after the loop (the code block) has been executed
    ```