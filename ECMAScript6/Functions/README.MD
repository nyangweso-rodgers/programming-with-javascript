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
* __ES6__ introduces a new syntax for writing functions. the same function from above can be written as:
```js
    const add = (x, y) => {
        let sum = x + y;
        console.log(sum);
    }
    add(67, 9); // 76
```

* _this new syntax is quite handy when you just need a simple function with one argument. you can skip typing function and return, as well as some parentheseses and braces_. for example:
    ```js
    // the code below defines a function named greet that has one argument and returns a message
    const greet = x => "welcome " + x;
    alert(greet("David")); // Output: welcome David
    ```

* _if there are no parameters, an empty pair of parentheseses should be used, as in:_
    ```js
        const x = () => alert("Hi");
        x(); // Output: Hi
    ```

* _this syntax is very useful for inline functions._ for example: _let's say we have an array and for each element of the array we need to execute a function we use the forEach method of the array to call a function for each element_
    ```js
        var arr2 = [2, 3, 7, 8];
        arr2.forEach(function(el) {
            console.log(el * 2)
        }); // Output: 4, 6, 49, 64

        // however, in ES6, the code above can be rewritten as following which is shorter and looks pretty nice
        const arr3 = [2, 3, 7, 8];
        arr3.forEach(v => {
            console.log(v * 2)
        }); 
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