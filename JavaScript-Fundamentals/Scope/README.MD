# Scope In JS

# Introduction to Scope in JS
* __Scope in JS__ determines the accessibility (visibility) of the variables. 3 types of __scope__ include:

# Block Scope
* __Block scope__: means declaring variables inside a block or curly brackets {}. Trying to access it outside the block throws an error. Variables declared with the __var__ keyword can NOT have block scope.
    ```js
        // Block Scope
        {
            var estate = 'Kitengela';
        }
        console.log(estate); // Output: Kitengela

        {
            let country = 'Kenya';
        }
        console.log(country);  // ReferenceError: country is not defined
    ```

# Function/Local Scope
* __Function (Local) Scope__: variables defined inside a function are not accessible (visible) from outside the function. Example:
    ```js
        // Here, we CANNOT use the Name variable
        function myFunction() {
            let Name = 'Rodgers';
            // Here, we can use the Name variable
        };
        // Here we cannot use the Name variable
    ```
* Variables declared within a function are known as _local variables_. Variables declared with __var__, __let__, and __const__ are pretty similar when declared inside a function. They all have a __Function Scope__.

# Global Scope
* __Global Scope__: variables declared Globally (outside any function) have a __Global Scope__. Global variables can be accessed from anywhere in a JS program.
    ```js
        let message = 'This is a global variable';

        function myFunction() {
            console.log(message);
            // code here can also be used
        }
        consolde.log(message);
    ```