# Hoisting in JS
* __Hoisting__ is a JS behavior in which a function or variable can be accessed or used before the declaration. But it's not going to work with __let__ and __const__ keywords but only works with __var__ keyword.

* Javascript "initialization" is not hoisted but "declarations" are hoisted. See in this example, the only declaration is hoisted not the value. Variable declared with "var" keyword is initialized with "undefined" value by default.

    ```js
        console.log(num1); // undefined
        var num1 = 10;
    ```

    ```js
    console.log(sumArrow(10, 20)); // sumArrow is not a function
    console.log(sumArrow); // undefined

    var sumArrow = (x, y) => {
        return x + y;
    };
```