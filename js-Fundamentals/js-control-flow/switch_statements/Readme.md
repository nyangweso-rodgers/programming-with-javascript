# `switch` statements in `js`

## Table Of Contents

# `switch` statement
* in cases when you need to test for multiple conditions, writing `if else statements` for each condition might not be the best solution. the `switch statement` is used to perform  different actions based on the different conditions.

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
* the `switch expression` is evaluated once. The value of the expression is compared with the values of each case. if there is a match, the associated block of code is executed.

# Task 1: using `case` statement to get the day of the week
```js
    var day = 8;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Error in the specified date!")
    }; // Error in the specified date!
```

# Task 2: Example 2
```js
    var c = 4;

    switch (c) {
        case 1:
            console.log(c + 1);
            break;
        case 2:
            console.log(c + 2);
            break;
        default:
            console.log(c + 1);
    }; // Output: 5
```

# Task 3: Example 3
```js
    // example 3
    var color = 'yellow';

    switch(color) {
        case "blue":
            console.log(`The color is ${color}`);
        break;

        case "green":
            console.log(`The color is ${color}`);
            break;
        default: // the default block can be omitted, if there is no need to handle the case when no match is found
        console.log(`The color is ${color}`);
    }; // The color is yellow
```