# Programming with JavaScript

![](./images/java-script.jpg)

## Table of Contents

1. [JavaScript Fundamentals](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/01-JavaScript-Fundamentals)
   1. [Data Types]()
   2. [Variables]()
   3. [Control Structures]()
   4. [Operators]()
   5. [Functions]()
      1. [Arrow Functions]()
   6. [Objects]()
   7. [JSON]()
   8. [APIs]()
   9. [DOM]()
2. [JavaScript Frameworks](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/03-JavaScript-Frameworks)
   1. [Node.js]()
3. [JavaScript Libraries]()
   1. [React.js]()
      1. [Create-React-App]()
      2. [Next.js]()
4. [JavaScript Challenge Programs](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/04-JavaScript-Challenge-Programs)
5. [Building Web Apps with JavaScript](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript)
   1. [Display Data on Button Click App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/01-Display-Data-on-Button-Click)
   2. [ToDo App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/02-ToDo-App)
   3. [Countdown Timer App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/03-Countdown-Timer-App)
   4. [Digital Time Display App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/04-Digital-Time-App)
   5. [Counter App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/05-Counter-App)
   6. [Colorify App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/06-Colorify-APP)
   7. [Calculator App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/07-Calculator-App)
   8. [Exam App](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/08-Exam-App)
6. [Resources](#Resources)

# JavaScript

# How JS works behind the scenes?

## How JavaScript Works

- **JavaScript** operates in a single-threaded environment, i.e., it executes one task at a time. It handles the execution of code in **Execution Contexts** (**EC**), which can be either **Global** or **Functional**.

- **Global Execution Context** (**GEC**)

  - Created when the code file is loaded.
  - The GEC is responsible for setting up the global object (in browsers, it's window) and the (`this`) keyword.
  - All variables and functions declared in the global scope are stored in the **Global EC**.

- **Execution Context Phases**

  - Memory Creation Phase:
    - During the memory phase, JavaScript allocates memory for variables and functions.
    - Variables are assigned the value undefined initially, while functions are stored in memory with their full definition.
  - Execution Phase
    - After the memory allocation phase, JavaScript starts executing the code line by line.
    - Variables are assigned actual values and functions are executed.

- **Functional Execution Context** (**FEC**)

  - Whenever a function is invoked, JavaScript creates a new Execution Context specifically for that function.
  - Execution context for each function has two phases:
    - Memory Phase: Memory is allocated to the local variables, and functions inside the function.
    - Execution Phase: The function body is executed, and variables get their actual values.
  - After execution, the function's execution context is destroyed, freeing up memory.

- **Return Statements**

  - Once a function reaches a `return` statement, the function immediately exits, and its **execution context** is removed from the Call Stack. Any code written after a return statement won't execute.

- The **Call Stack**
  - JavaScript uses the Call Stack to manage execution contexts.
    - LIFO (Last In, First Out) concept is used:
    - When a function is called, its execution context is placed on top of the stack.
    - Once the function completes (or reaches return), its execution context is popped off the stack.

# JavaScript is Single-Threaded

- **Single-threaded** means JavaScript can only perform one operation at a time but still it can perform asynchronous operations.

# Resources

1.  [nyangweso-rodgers.hashnode.dev - Is JavaScript a Compiled or Interpreted Language?](https://nyangweso-rodgers.hashnode.dev/javascript-series-part-1-is-javascript-a-compiled-or-interpreted-language)
2.  [javascript.info](https://javascript.info/)
3.  [daily.dev - ](https://dev.to/tanishparashar/how-js-works-behind-the-scenes-1knn?ref=dailydev)
