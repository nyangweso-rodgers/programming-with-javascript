# Functions in ES6

# Introduction to Functions in ES6
* prior to ES6, a __JS function__ was defined like this:
    ```JS
        function add(x, y) {
            var sum = x + y;
            console.log(sum);
        };
        add(67, 9); // Output: 76
    ```

# Defalt Parameters in ES6
* in __ES6__, we can put the default values right in the signature of the functions, for example:
    ```js
        function test(a, b = 3, c = 42) {
            return a + b + c;
        }
        console.log(test(5)); // 50
    ```
* _here is an example of an arrow function with default parameters_
    ```js
        const test = (a, b = 3, c = 42) => {
            return a + b + c;
        }
        console.log(test(5)); // Output: 50
    ```
* _default value expressions are evaluated at function call time from left to right. this also means that default expressions can use the values previously-filled parameterts_