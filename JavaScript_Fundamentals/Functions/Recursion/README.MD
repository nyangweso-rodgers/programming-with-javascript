# Recursion In JS

## Table Of Contents

# Introduction to Recursive Functions in JS
* __Recursion__ is a process of calling itself. A __function__ that calls itself is called a __recursive function__. A __recursive function__ always has a condition that stops the function from calling itself. To prevent infinite recursion, you can use __if...else statement__ where one branch makes the recursive call, and the other doesn't.

# Example 1: calculate the sum of natural numbers from 1 to n using the recursion
```js
    function sum(n) {
        if (n <= 1) {
            return n;
        }
        return n + sum(n -1);
    }
    console.log(sum(4)) // 10
```
# Example 2: program to count down numbers to 1
```js
    function countDown(number) {
        // display the number
        console.log(number);

        // decrease the number by value
        const newNumber = number - 1;

        // base case
        if (newNumber > 0) {
            countDown(newNumber);
        }
    }
    console.log(countDown(4)); // 4, 3, 2, 1
```