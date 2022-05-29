# Control Structure in JavaScript

## Table of Contents
- 
# if statement
use if to specify a block of code that will be executed if a specified condition is true:
```js
    // this statement will be executed only if a specified conditin is true
    if (condition) {
        statements;
    }
```
```js
    var a = 7;
    var b = 10;

    if (a < b) {
        document.write("JS is starting to get easier");
    }; // JS is starting to get easier
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
```js
    var a = 7;
    var b = 10;

    if (a > b) {
        document.write("A is greater than B");
    }
    else {
        document.write("A is less than B");
    };
    // A is less than B
```
_Remark_: _there is also another way to do this check using the ? operator:_
```js
    a > b? document.write("A is greater than B"): document.write("Not Allowed!"); // A is less than B
```
# else if statement
you can use the else if statement to specify a new condition if the first condition is FALSE
```js
    var dayOfWeek = 'Monday';

    if (dayOfWeek == 'Monday') {
        document.write(`Today is ${dayOfWeek}, we are eating Pizza and Soda`);
    }
    else if (dayOfWeek == 'Tuesday') {
        document.write(`Today is ${dayOfWeek}, we are eating Ugali and Kales`);
    }
    else {
        document.write("Day is not specififed");
        // THE FINAL else block will be executed when none of the conditions is true
    };
```
```js
    var onLineStatus = 1;
    var message;

    if (onLineStatus == 1) {
        message = "User is online!";
    } else if (onLineStatus == 0) {
        message = "User is Offline!";
    } else {
        message = "User is away";
    };
    document.write(message);
```
# switch statement
in cases when you need to test for multiple conditions, writing _if else statements_ for each condition might not be the best solution. the _switch statement_ is used to perform  different actions based on the different conditions.
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
the __switch expression__ is evaluated once. The value of the expression is compared with the values of each case. if there is a match, the associated block of code is executed.
```js
    var day = 8;
    switch (day) {
        case 1:
            document.write("Monday");
            break;
        case 2:
            document.write("Tuesday");
            break;
        case 3:
            document.write("Wednesday");
            break;
        case 4:
            document.write("Thursday");
            break;
        case 5:
            document.write("Friday");
            break;
        case 6:
            document.write("Saturday");
            break;
        case 7:
            document.write("Sunday");
            break;
        default:
            document.write("Error in the specified date!")
    }; // Error in the specified date!
```
```js
    var c = 4;

    switch (c) {
        case 1:
            document.write(c + 1);
            break;
        case 2:
            document.write(c + 2);
            break;
        default:
            document.write(c + 1);
    }; // Output: 5
```
```js
    var color = 'yellow';

    switch(color) {
        case "blue":
        document.write(`The color is ${color}`);
        break;

        case "green":
            document.write(`The color is ${color}`);
            break;
        default: // the default block can be omitted, if there is no need to handle the case when no match is found
            document.write(`The color is ${color}`);
    }; // The color is yellow
```

```js
    var day_of_week = 1;

    switch (day_of_week) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        document.write("working days");
        break;
        case 6:
        document.write("saturday")
        break;
        default:
        document.write('today is sunday');
    }; // Outpout: working days
```
# for loops
__loops__ can execute a block of code a number of times. they are handy in cases inwhich you want to run the same code repeatedly,adding a different value each time. JS has three types of loops: 
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
```js
    // lists numbers between 1 to 10
    for (i=1; i<=10; i++) {
        if (i == 5) { // once it reaches 5, it will break out of the loop
            break; // the break statement jumps out of a loop and continues executing the code after the loops
        }
    document.write(i + "<br/>");
    };
    // statement 1 sets a variable before the for loop starts (var i = 1)
    // statement 2 defines the condition for the for loop to run ( i must be less than or equal to 10)
    // statement 3 increases a value (i++) each time the code block in the loop has been executed

    // statement 1 is optional, and can be omitted, if your values are set before the loop starts
    var i = 1;
    for (; i<=10; i++) {
    document.write(i + "<br/>");
    };

    // also, you can initiate more than one value in statement 1, using commas to seperate them
    for (i =1, text=""; i <= 5; i++){
    text = i;
    document.write(i + "<br/>");
    };
```
 _Remarks_:
    *  _you can use the __return__ keyword to return some value immediately from the loop inside of a fuction. This will also break the loop_
    ```js
        for (i = 0; i <= 10; i++) {
        if (i == 5) {
            continue; // the continue statement breaks only one iteration in the loop, and continues with the next iteration
        }
        document.write(i + "<br/>"); // the value 5 is not printed because continue skips that iteration of the loop
        }
    ```
        * _Example 1_: for loops
    ```js
        # Example 1:
        var sum = 0;
        for (i = 4; i < 8; i++) {
        if (i == 6) {
            continue;
        }
        sum += i;
        }
        document.write(sum); // Output: 16
    ```
    # while Loop
the __while loop__ repetas through a block of code as long as a specified condition is true.
```js
    // syntax
    while (conditon) {
        // code block
    };
    // the condition can be any conditional statement that returns true or false
```
```js
    var c = 1;

    while (c<=10) {
        document.write(c + "<br/>");
        c++;

        // the loop will continue to run as long as c is less than, or equal 10. each time the loop runs, it increases by 1
        // be careful writing conditions, if a condition is always true, the loop will run forever
        // if you fail to increase the variable used in the condition, the loop willl neer end
        // make sure that the condition in a while loop eventually becomes false
    };
```
# do..while Loop
the __do..while loop__ is a variant of the __while loop__. this loop will execute the code block once, before checking if the condition is true and then it will repeat the loop as long as the condition is true.
```js
    // syntax
    do {
        // code block
    }
    while (condition);
```
```js
    var d = 20;

    do {
        document.write(d + "<br/>");
        d++;
    }
    while (d <= 25); // this prints out numbers from 20 to 25
    // the loop will always be executed at least  once, even if the condition is false, ..............because the code block is executed  before the condition is tested
```