# Arrow Functions in JS

# Arrow Functions
* __Arrow Functions__ provide a more coincise syntax for writing functions expressions by removing the "__function__" and "__return__" keywords. __Arrow Functions__ are defined using the __fat arrow__ (=>) notation.

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