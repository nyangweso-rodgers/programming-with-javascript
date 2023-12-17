# `js` Functions

## Table Of Contents

# How to define `js` Functions

## `Function Declaration`

- `Function Declaration` can be called earlier than it is defined. For example, a global Function Declaration is visible in the whole script, no matter where it is.
- When `JavaScript` prepares to run the script, it first looks for global Function Declarations in it and creates the functions.

- `Function Declarations` load before the code is executed. The function in `function declartion` can be accessed before and after the function definiton. consists of the `function` keyword, followed by:

  - Name of the function
  - lists of parameters to the function, enclosed in a parenthesis
  - JS statements that define the function, enclosed in curly brackets

- Syntax:

  ```js
  // function declaration syntax
  function functionName(params) {
    // code to be executed goes here
  }
  ```

- Examples:

  1. `sumFunction`

     - define a `sumFunction` which takes two integers and returns the sum

       ```js
       function sumFunction(a, b) {
         return a + b;
       }

       console.log(sumFunction(1, 2)); // Output: 3
       ```

  2. `divideFunction` with Error Handling

     - defines a division function while handling errors

       ```js
       // Function Declaration
       function divideFunctionWithFunctionDeclaration(dividend, divisor) {
         try {
           // Attempt the division
           if (divisor === 0) {
             throw new Error("Division by zero is not allowed.");
           }

           const result = dividend / divisor;
           return result;
         } catch (error) {
           // handle error
           console.error("Error: ", error.message);
           return undefined; // or any other value to indicate failure
         } finally {
           // Code in this block will execute regardless of whether an error occurred or not
           console.log("Division operation completed.");
         }
       }

       console.log(divideFunctionWithFunctionDeclaration(6, 2));
       ```

## `Function Constructor`

- Examples:

  1. `sumFunction` using Constructor

     ```js
     let divideFunctionWithConstructor = new Function(
       "dividend",
       "divisor",
       "return dividend / divisor"
     );

     console.log(divideFunctionWithConstructor(7, 2)); // Output: 3.5
     ```

## `Function Expression`

- Functions can also be assigned to `variables`, i.e., `Function Expression`
- Syntax:

  ```js
  var x = function exampleFunction() {
    console.log("example function");
  };
  ```

- `Function Expression` load when the interpreter reaches that line of code. If it's called before then it leads to an error. Why? _because the Interpreter will only hoist variable declaration to the top but keeps assignment at the same line._ The function in `Function Expression` can be accessed only after the function definition.

- Example:

  1. `divideFunction` using Function Expression

     ```js
     // Function Expression
     let divideFunctionWithExpression = function (dividend, divisor) {
       const result = dividend / divisor;
       return result;
     };

     console.log(divideFunctionWithExpression(8, 2)); // Output: 4
     ```

## `Arrow Function`

- Example:

  ```js
  // Array functions
  let sumFunction = (a, b) => {
    return a + b;
  };

  console.log(sumFunction(1, 2)); // Output: 3
  ```

# Nested Functions

- In `js`, a function can also contain another function.
- Example,

  ```js
  // Nested Functions
  // outer function
  function greetMe(name) {
    // inner function
    function displayName() {
      console.log("Hello " + " " + name);
    }
    displayName();
  }

  // calling the outer function
  greetMe("Rodgers"); // Output: "Hello Rodgers"
  ```

# Functions with Default Parameter

- default value expressions are evaluated at function call time from left to right. this also means that default expressions can use the values previously-filled parameterts.

  ```js
  // default parameter
  // Functions with Default Parameters
  function test(a, b = 3, c = 4) {
    var result = a + b + c;
    return result;
  }

  console.log(test(5)); // Output: 12
  ```

# `js` Closure

- In `js`, **closure** provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
- For example

  ```js
  function greet() {
    // variable defined outside the inner function
    let name = "Rodgers";

    // inner function
    function displayName() {
      // accessing name variable
      return "Hi" + " " + name;
    }

    return displayName;
  }

  const g1 = greet();
  console.log(g1); // return the function definition
  console.log(g1()); // returns the value
  ```

- Advantages of using **closures** include:
  - **Closures** can be used to simulate private variables and methods
  - **closures** help in maintaining the state between function calls without using a global variable

# Function Scope

- Functions in `js` are `block scoped`, meaning that any variable declared inside the function's blocks is part of the function's block scope and is not accessible outside of the function.

# Anonymous functions

- `Anonymous function` is a function without a name. These types of functions are typically assigned to variables or passed as parameters to other functions. E.g.,

  ```js
  // example - anonymous function
  let double = (num) => num * 2;
  ```

- `Anonymous functions` are often used in the following scenarios:
  - They can be defined within another function call.
  - They can be stored in a variable.
  - They can be assigned to events.

# `Aync`/`Await` Functions

- `async` function is a function declared with the `async` keyword that makes a normal function to return a `promise`.
- Suppose you have a simple or regular `function`:

  ```js
  function show() {
    return "hello";
  }
  ```

- Then you added the `async` hello keyword before it. Now it will return you a promise instead of a simple value return "hello"; after printing.

  ```js
  async function print() {
    return "hello";
  }
  ```

- Because the code the above code is the same as the below:

  ```js
  function show() {
    return new Promise((resolve, reject) => {
      resolve("hello");
    });
  }
  ```

- You could say `async` made it easier to write `promises` without writing the `promise` syntax.
- `Await` is a keyword that makes the `async function` wait for the `promise` inside it to complete its execution.
- It can't be used in a regular function or anywhere in the code other than `async` function.
- wherever `await` is used inside an `async` function, `await` will put the `async` function on hold until the p`romise inside the `async` function has finished running.
- However, when `await` places the `async` function on hold, it will send the control to execute the statements after the async function so that promise can finish running in that time.

# Callback Functions

- `Callback` is a function that is passed as a parameter to another function and then invoked or executed inside that function. `Callback` is commonly used in JavaScript's asynchronous operations to provide synchronous functionality.

# Recursive Functions

- `Recursion` is a process of calling itself. A `function` that calls itself is called a `recursive function`. A `recursive function` always has a condition that stops the function from calling itself.

- To prevent infinite recursion, you can use `if...else statement` where one branch makes the recursive call, and the other doesn't.

# `require()` function

- `require()` function is a built-in `CommonJS` module function supported in `Node.js` that lets you include modules within your project. This is because, by default, `Node.js` treats JavaScript code as `CommonJS` modules.
- How to Use the `require()` Function in JS

  ```js
  // Syntax: require
  var varName = require(localName);
  ```

# Types of JS Functions

1. **eval() function**: You can get the result of a **string expression** using the **eval() function**, which takes a string expression argument and returns the result. If the argument is empty, it returns **undefined**.

```js
eval("10 * 20 + 8"); // 208
```

2. **document.write() function**: writes a _string_ to the **HTML** document. This function can be used to write _text_, _HTML_, or Both. The **document.write()** method should be used for testing.

```js
document.write("This is a document dot write function");

// Just like HTML, we can use HTML tags to format texts in JS. we can output the text as a heading
document.write("Hello, world!");
document.write("<h1>Using document dot write function to format texts</h1>");
```

# Resources

1. []()
