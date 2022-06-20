# Functional Programming in JavaScript

## Table of Contents
1. [Introduction to JS Functions](#Introduction-to-JS-Functions)
    - [Function Declaration](#Function-Declaration)
    - [Function Expression](#Function-Expression)
    - [Function Declaration vs Function Expression](#Function-Declaration-vs-Function-Expression)
    - [Parameters vs Arguments](#Parameters-vs-Arguments)
    - [Return statement](#Return-statement)
    - [Invoking a Function](#Invoking-a-Function)

2. [Callback Functions](#Callback-Functions)

3. [Higher Order Functions](#Higher-Order-Functions)
    - forEach()
    - map()
    - filter()
    - reduce()
4. [Arrow Functions](#Arrow-Functions)
5. [Types of JS Functions](#Types-of-JS-Functions)


# Introduction to JS Functions
# Function Declaration
__Function Declarations__ load before the code is executed. The function in __function declartion__ can be accessed before and after the function definiton. consists of the `function` keyword, followed by:
* Name of the function
* lists of parameters to the function, enclosed in a parenthesis
* JS statements that define the function, enclosed in curly brackets

```js
    // Syntax
    function name(parameter1, parameter2, parameter3) {
        // code to be executed

    // function declaration
    function sayHi() {
    console.log( 'Hi' ); // you can use alert
    };
    console.log(sayHi()); // 'Hi'
    }
```
_Remark_: _therefore, you can call the function declared with function declaration - before you even declare that function. e.g.,_
```js
    // calling the function before evem declaring it
    hello();

    function hello() {
        console.log("Hi there");
    }; // Output(No error): Hi there
```
# Function Expression
__Function expressions__ load when the interpreter reaches that line of code. If it's called before then it leads to an error. Why? _because the Interpreter will only hoist variable declaration to the top but keeps assignment at the same line._ The function in __functin declaration__ can be accessed only after the function definition.
```js
    // Sytax
    var functionName = function() {
        // statement
    };

    // example - function expression
    let sayHi2 = function() {
        console.log( 'Hi' );
        // Here, the function is created and assigned to the variable explicitly, like any other value. 
    };
```
# Function Declaration vs Function Expression
* The more subtle difference is when a function is created by the JavaScript engine. 
* A __Function Expression__ is created when the execution reaches it and is usable only from that moment. Once the execution flow passes to the right side of the assignment let sum2 = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on. 
* __Function Declarations__ are different. A __Function Declaration__ can be called earlier than it is defined. For example, a global Function Declaration is visible in the whole script, no matter where it is. That’s due to internal algorithms.
* When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So it has access to these functions.
* _Remark_: _No matter how the function is defined, it’s just a value stored in the variable sayHi. The meaning of these code samples is the same: "create a function and put it into the variable sayHi"._

# Parameters vs Arguments
__parameters__ and __arguments__ are often used interchangeably. hwoever, they are different. When declaring a function, you specify the __parameters__. However, when calling a function, you pass the __arguments__.
# Return statement
when JS reached a `return` statement, the funtion will stop executing. Functions often return value is "returned" back to the "caller"
```js
    function name(parameter1, parameter2, parameter3) {
        return parameter1 * parameter2
    }
```
# Invoking a Function
the code inside the function will execute when "something" invokes(calls) the function
```js
    function name(parameter1, parameter2, parameter3) {
        return parameter1 * parameter2
    }
    name(2, 3) // calling a function
```
# Callback Functions
In JS, you pass a function as an argument to a function. The function that is passed as an argument inside another function is called a __callback function__. Callback functions can be __synchronous__ or __asynchronous__.
```js
    // synchronous callback - executed immediately
    function greeting(name) {
        alert('Hello ' + name);
    }
    function processUserInput(callback) {
        var name = prompt('Please enter your name.');
        callback(name);
    }
    alert(processUserInput(greeting)); 

    // asynchronous callbacks - if a js has to wait for an operation to complete, it will execute the rest of the code while waiting
```
_Remarks_:
* _the benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call_
# Higher Order Functions
__Higher Order Functions__ satifies any of the following 3 conditions:
1. takes another function as an argument OR
2. returns any other function OR
3. Does both 1 and 2
```js
    function morning(name) {
    return `Good morning, ${name}`;
    }
    function evening(name) {
        return `Good evening, ${name}`;
    }
    function happyBirthday(name) {
        return `Happy Birthday, ${name}`;
    }
    function greet(name, func) {
        return func(name);
    }
    console.log(greet("Rodgers", morning)); // Output: Good morning, Rodgers
    console.log(greet("Rodgers", evening)); // Output: Good evening, Rodgers
    console.log(greet("Rodgers", happyBirthday)); // Output: Happy Birthday, Rodgers
```
__Remarks__:
- greet is a higher order function because it is taking another function as an argument
- functions morning(), evening() and happyBirthday() are callback functions because they are getting called be the function greet

__Higher Order Functions__ include:
* __forEach()__
* __map()__
* __filter()__
* ___reduce__:

# Arrow Functions
__Arrow Function__ is one of the features introduced in the __ES6__ version of JS. It allows you to create a function in a cleaner way compared to regular functions.
```js
    // Syntax
    let myFunction = (arg1, arg2) => {
        // statement goes here
    },

    // calculate your age
    const calculateAge = birthYear => 2021 - birthYear;
    const myAge = calculateAge(1994);
    console.log(myAge); // Output: 27

    // calculate years to retirement
    const calculateAge = birthYear => 2021 - birthYear;
    const myAge = calculateAge(1994);
    console.log(myAge); // Output:

    const yearsToRetirement = (birthYear, firstName) => {
        const age = 2022 - birthYear;
        const retirement = 65 - age;
        return `${firstName} will be retired in ${retirement} years`;
    };
    const retirement = yearsToRetirement(1994, "Rodgers");
    console.log(retirement); // Output: Rodgers will be retired in 37 years
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