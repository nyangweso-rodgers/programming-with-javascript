# Function Declaration

* __Function Declarations__ are different. A __Function Declaration__ can be called earlier than it is defined. For example, a global Function Declaration is visible in the whole script, no matter where it is. That’s due to internal algorithms.

* When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So it has access to these functions.

* __Function Declarations__ load before the code is executed. The function in __function declartion__ can be accessed before and after the function definiton. consists of the `function` keyword, followed by:
    * Name of the function
    * lists of parameters to the function, enclosed in a parenthesis
    * JS statements that define the function, enclosed in curly brackets

# Synatx
 ```js
    // Syntax
    function name(parameter1, parameter2, parameter3) {
        // code to be executed
```