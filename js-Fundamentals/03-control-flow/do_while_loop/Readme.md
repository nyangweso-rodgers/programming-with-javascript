# `do while loop` in `js`

# do..while loop
* the `do..while loop` is a variant of the `while loop`. this loop will execute the code block once, before checking if the condition is true and then it will repeat the loop as long as the condition is true.

    ```js
        // syntax
        do {
            // code block
        }
        while (condition);
    ```

# Task 1: Print numbers between 1 and 10 using a `do while` loop
```js
    var d = 1;

    do {
        console.log(d + "<br/>");
        d++;
    }
    while (d <= 10); // this prints out numbers from 20 to 25
    // the loop will always be executed at least  once, even if the condition is false, ..............because the code block is executed  before the condition is tested
```