# `for loops` in `js`

## Table Of Contents

# for loops
* `loops` can execute a block of code a number of times. they are handy in cases in which you want to run the same code repeatedly,adding a different value each time. JS has three types of loops:
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

# Task 1: lists numbers between 1 and 10 using a `for loop`
```js
    // lists numbers between 1 to 10
    for (i=1; i<=10; i++) {
        if (i == 5) { // once it reaches 5, it will break out of the loop
            break; // the break statement jumps out of a loop and continues executing the code after the loops
        }
    console.log(i + "<br/>");
    };
    // statement 1 sets a variable before the for loop starts (var i = 1)
    // statement 2 defines the condition for the for loop to run ( i must be less than or equal to 10)
    // statement 3 increases a value (i++) each time the code block in the loop has been executed
```

# Task 1.2: lists numbers between 1 and 10 using a `for loop`
```js
    // statement 1 is optional, and can be omitted, if your values are set before the loop starts
    var i = 1;
    for (; i<=10; i++) {
    console.log(i + "<br/>")};
```

# Task 1.3: initiating more than one value in the first statement of a `for loop`
```js
     // also, you can initiate more than one value in statement 1, using commas to seperate them
    for (i =1, text=""; i <= 5; i++){
        text = i;
        console.log(i + "<br/>");
        };
```

# Task 2: using a `return` keyword with a `for loop`
```js
    // you can also use the return keyword to return some value immediately from the loop inside of a fuction. This will also break the loop
    for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue; // the continue statement breaks only one iteration in the loop, and continues with the next iteration
    }
    document.write(i + "<br/>"); // the value 5 is not printed because continue skips that iteration of the loop
    }
```