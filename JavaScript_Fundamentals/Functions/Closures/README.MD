# Closures

* A __closure__ can be defined as a JavaScript feature in which the inner function has access to the outer function variable.

* In JavaScript, a function can also contain another function. This is called a __nested function__. For example,
    ```js
        // outer function 
        function greet(name) {

            // inner function
            function displayName() {
                console.log('Hi' +  ' ' + name);
            };
            displayName();
        };

        // calling outer function
        greet('Rodgers');
    ```

* In JavaScript, you can also return a function within a function. _For example_,

    ```js
        function greet(name) {
            function displayName() {
                console.log('Hi' + ' ' + name);
            };

            // returning a function
            return displayName;
        };

        const g1 = greet('Rodgers');

        console.log(g1); // returns the function definition
        g1(); // Calling the Function
    ```

* In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. For example
    ```js   
        // outer function
        function greet() {

            // variable defined outside the inner function
            let name = 'Rodgers';

            // inner function
            function displayName() {

                // accessing name variable
                return 'Hi' + ' ' + name;
            };

            return displayName;
        };

        const g1 = greet(); 
        console.log(g1); // return the function definition
        console.log(g1()); // returns the value
    ```

#  Advantages of using closures
* Closures can be used to simulate private variables and methods
* closures help in maintaining the state between function calls without using a global variable