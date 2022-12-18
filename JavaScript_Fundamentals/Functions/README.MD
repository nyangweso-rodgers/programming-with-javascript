# Functions

## Table Of Contents
- [Function Declaration vs Function Expression](#Function-Declaration-vs-Function-Expression)
    - [Function Declaration](#Function-Declaration)
    - [Function Expression](#Function-Expression)

- [Callback Functions]()
- [Recursive Functions]()
- [Further Reading]()

# Function Declaration vs Function Expression
* The more subtle difference is when a function is created by the JavaScript engine. 

* A __Function Expression__ is created when the execution reaches it and is usable only from that moment. 

* __Function Declarations__ are different. A __Function Declaration__ can be called earlier than it is defined. For example, a global Function Declaration is visible in the whole script, no matter where it is. That’s due to internal algorithms.

* When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So it has access to these functions.

* _Remark_: _No matter how the function is defined, it’s just a value stored in the variable sayHi. The meaning of these code samples is the same: "create a function and put it into the variable sayHi"._
# Function Declaration
* __Function Declarations__ load before the code is executed. The function in __function declartion__ can be accessed before and after the function definiton. consists of the `function` keyword, followed by:
    * Name of the function
    * lists of parameters to the function, enclosed in a parenthesis
    * JS statements that define the function, enclosed in curly brackets

    ```js
        // Syntax
        function name(parameter1, parameter2, parameter3) {
            // code to be executed
    ```
* _Remark_: _therefore, you can call the function declared with function declaration - before you even declare that function. e.g.,_

# Function Expression
* __Function expressions__ load when the interpreter reaches that line of code. If it's called before then it leads to an error. Why? _because the Interpreter will only hoist variable declaration to the top but keeps assignment at the same line._ The function in __functin declaration__ can be accessed only after the function definition.
    ```js
        // Sytax
        var functionName = function() {
            // statement
        };
    ```

# Parameters vs Arguments
* __parameters__ and __arguments__ are often used interchangeably. hwoever, they are different. When declaring a function, you specify the __parameters__. However, when calling a function, you pass the __arguments__.
# Return statement
* when JS reached a `return` statement, the funtion will stop executing. Functions often return value is "returned" back to the "caller"
    ```js
        function name(parameter1, parameter2, parameter3) {
            return parameter1 * parameter2
        }
    ```

# Invoking a Function
* the code inside the function will execute when "something" invokes(calls) the function
    ```js
        function name(parameter1, parameter2, parameter3) {
            return parameter1 * parameter2
        }
        name(2, 3) // calling a function
    ```

# Types of JS Functions
1. __eval() function__: You can get the result of a __string expression__ using the __eval() function__, which takes a string expression argument and returns the result. If the argument is empty, it returns __undefined__.
```js
    eval("10 * 20 + 8"); // 208
```
2. __document.write() function__: writes a _string_ to the __HTML__ document. This function can be used to write _text_, _HTML_, or Both. The __document.write()__ method should be used for testing.
```js
    document.write('This is a document dot write function');

    // Just like HTML, we can use HTML tags to format texts in JS. we can output the text as a heading
    document.write("Hello, world!");
    document.write("<h1>Using document dot write function to format texts</h1>")
```