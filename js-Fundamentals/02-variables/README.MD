# Variables

## Table Of Contents

# Declaring Variables in JavaScript

# Method 1: using `let` keyword
```js
    // using `let` keyword
    let message;
    message = 'Hallo World!'; // store the string
```

# Method 2: using `var` keyword
* the `var` keyword is almost the same as `let`. it also declares a variable but in an old fashioned way. there are subtle differences between "`var`" and "`let`" 

    ```js
        // using `var` keyword
        var name = "Nyangweso";
    ```

# Method 3: using `const` keyword
```js
    // Method 3: using const keyword - used to declare a constant(unchanging) variable
    const myBirthDay = '25.03.1994';
```

*_Remarks_: 
  * _When the value of a variable is changed, the old data is removed from the variable_
    ```js
        let message1;
        message1 = 'old variable';
        message1 = 'new variable';

        console.log(message1); // Output: 'new variable'
    ```
  * _we can also declare two variables and copy data from one into the other_
    ```js
        let firstName = 'rodgers';
        let secondName;

        // copy 'rodgers' from firstName into secondName
        secondName = firstName;

        // now, two variabels hold the same data
        alert(firstName);
        alert(secondName); // Output: 'rodgers'
    ```

# Variables Scope in `js`
* __`js` Scope__ determines the accessibility (visibility) of the `variables`. 3 types of __scope__ include:
  * 
# Variables Scope in `js` 1: `Block Scope`
* __Block scope__: means declaring `variables` inside a block or curly brackets `{}`. Trying to access it outside the block throws an error. 
* `Variables` declared with the `let` keyword can NOT have block scope.
* Case 1:
  
    ```js
        {
            var estate = 'Kitengela';
        }
        // console.log(estate); // Output: Kitengela
    ```
* Case 2:
  
  ```js
    {
	    let country = 'Kenya';
    }
    // console.log(country);  // ReferenceError: country is not defined
  ```

# Variables Scope in `js` 2: `Global Scope`
* __Global Scope__: variables declared Globally (outside any function) have a __Global Scope__. Global variables can be accessed from anywhere in a `JS` program.

    ```js
        let myMessage = 'This is a global variable';

        function myFunction() {
            console.log(myMessage);
            // code here can also be used
        };
        //console.log(myMessage);
    ```

# Variables Scope in `js` 3: `Function/Local Scope`
* __Function (Local) Scope__: variables defined inside a `function` are not accessible (visible) from outside the `function`. 
* Example:
  
    ```js
        // Here, we CANNOT use the Name variable
        function myFunction() {
            let Name = 'Rodgers';
            // Here, we can use the Name variable
        };
        // Here we cannot use the Name variable
    ```
* Variables declared within a function are known as _local variables_. Variables declared with __var__, __let__, and __const__ are pretty similar when declared inside a function. They all have a __Function Scope__.
# `js` Variable Hoisting
* __Hoisting__ is a `js` behavior in which a `function` or `variable` can be accessed or used before the declaration. 
* But it's not going to work with `let` and `const` keywords but only works with `var` keyword.

* `js` "initialization" is not hoisted but "declarations" are hoisted. See in this example, the only declaration is hoisted not the value. Variable declared with "`var`" keyword is initialized with "undefined" value by default.

    ```js
        // js variable hoisting
        console.log(my_country); // Output: undefined

        var my_country = "Kenya"; 
    ```

    ```js
        console.log(sumArrow(10, 20)); // sumArrow is not a function
        console.log(sumArrow); // undefined

        var sumArrow = (x, y) => {
            return x + y;
        };
    ```