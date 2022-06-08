# JavaScript

## Table of Contents
1. [Introduction to JavaScript](#Introduction-to-JavaScript)
    - [Difference between Java and Javascript](#Difference-between-Java-and-Javascript)
    - [Features of JavaScript](#Features-of-JavaScript)
    - [How do Engines work?](#How-do-Engines-work?)
    - [What CAN in-browser JavaScript do?](#What-CAN-in-browser-JavaScript-do?)
    - [What CAN'T in-browser JavaScript do?](#What-CAN'T-in-browser-JavaScript-do?)
    - [Languages "over" JavaScript](#Languages-"over"-JavaScript)
    - [The Modern mode, "use strict"](#The-Modern-mode,-"use-strict")
    - [Definitions of Terms](#Definitions-of-Terms)
    - [Attaching Scripts to a Webpage](#Attaching-a-script-to-a-Webpage)

2. [Alert, Prompt, and Confirm boxes](#Alert,-Prompt,-and-Confirm-boxes)
3. [Console Methods](#Console-Methods)
    - console.log()
    - console.error()
    - console.warn()
    - console.time()
    - console.group()
    - console.table()
    - console.assert()
    - console.trace()
    - console.count()
    - console.dir()
3. [Variables in JavaScript](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Variables_in_JavaScript)
4. [Data Types in JavaScript](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Data_Types_in_JavaScript)
    - Number
    - String
    - Boolean
    - null
    - Undefined
    - object
5. [Operators & Type Conversions](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Operators_and_Type_Conversions)
    - Assignment Operator
    - Remainder
    - Exponentiation
    - Increment/Decrement
    - Bitwise Operators
    - Comma Operators
    - Math Operators
    - Type Conversions

6. [Control Flow in JavaScript]()
    - [Examples of functions]()
    - [Reverse Character Function]()
    - [FizzBuzz Function]()
    - [if statement]()
    - [else statement]()
    - [else if statement]()
    - [switch statement]()
    - [for loops]()
    - [while Loop]()
    - [do..while Loop]()
7. [Functional Programming in JavaScript]()

8. [Recursion in JavaScript](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Recursion_in_JavaScript)

9. [Objects Oriented Programming in JavaScript](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript)
    - [Arrays](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript/Array_Objects)
    - [Math Object](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript/Math_Objects)
    - [Date Object](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript/Date_Objects)
    
10. [JavaScript Frameworks Comparisons](#JavaScript-Frameworks)
    - [Angular vs React](#Angular-vs-React)
    - [PROS OF ANGULAR](#PROS-OF-ANGULAR)
    - [CONS OF ANGULAR](#CONS-OF-ANGULAR)
    - [PROS OF REACT](#PROS-OF-REACT)
    - [CONS OF REACT](#CONS-OF-REACT)

11. [Angular](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/AngularJS)
12. [React](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/React)
13. [References](#References)

# Introduction to JavaScript
__JavaScript__ was initially created to make "web pages alive". the programs in this langauge are called __scripts__. they can be written right in a web page's HTML and run automatically as the page loads. __Scripts__ are provided and executed as plain texts. they don't need special preparation or compilation to run. - in this aspect, __JS__ is very different from another programming language called __Java__.

Today, __JS__ can execute not only in the __browser__, but also on the __server__, or actually on any device that has a specal program called the __JavaScript Engine__. The browser has an embeded engine sometimes called a "__JavaScript virtual machine__". Different engines have different 'codenames'. For example:
* __V8__ - in Chrome and Opera
* __SpiderMonkey__ - in Mozilla Firefox
* there are other codenames like:
    -  "__Trident__" and "__Chakra__" for different versions of Internet Explorer, 
    - "__ChakraCore__" for Microsoft Edge, 
    - "__Nitro__" and "__SquirellFish__" for Safari, e.t.c.,

# Difference between Java and Javascript
__Java__ is an __OOP programming__. It creates applications that run in a _virtual machine_ or _browser_. __JavaScript__ is an __OOP scripting language__. The code is run on browser only.

# Features of JavaScript
* it is a lightweight, interpreted programming language
* it is designed for creating network-centric applications
* it is complementary to and integrated with Java
* it is open and cross-platform scripting language

# How do Engines work?
Basics of Engines are as follows:
1. the engine (embeded if it's a browser) reads ('parses') the script
2. then it converts ('compiles') the scripts to the machine language
3. and then the machine code runs pretty fast.

The __engine__ applies optimizations at each step of the process. it even watches the compiled scripts as it runs, analyzes the data that flows through it, and applies optimizations to the machine code based on that knowledge. when it's done, scripts run quite fast.

# How Does JS work?
When you write __JS__, how does the browser understands what has been written? This is handled by a __JS Engine__ and different browsers have different __JS Engine__. 

# V8 Engine
the purpose of __v8 Engine__ is to convert __JS code__ into a __binary__ so that the computer can understand. Components of the __v8 Engine__ are as follows:
* __Memory Heap__: this is where memory allocation happens
* __Call Stack__: this is to keep track of where we are in the code execution.

_Remarks_: 
* _How do we get to machine code?_: To get to machine code, __JS file__ will either have to be __compiled__ or __interpreted__.
* _Compilation_: the entire source code is converted to machine code at once.
* _Interpretation_: there is an interpreter which runs through the source code and executes it line by line.
* _Is JS compiled or interpreted?_: JS used to be purely interpreted language  but the problem with an __interpreted__ language is that they are much, much slower than the __compiled__ languages. Modern __JS Engine__ now uses both a mix between _compilation_ and _interpretation_ which is J-I-T (Just In Time) compilation.
* The __compiler__ and __interpreter__ are not sufficient for efficiency, that's why __JIT__(Just In Time) comes into the picture. So, JavaScript is a collection of compilers as well as interpreters which are also known as JIT.
* __JIT__ compilation is a method for improving the performance of the code. It decides the most frequently used code, then compiles it to machine code.

# What CAN in browser JavaScript do?
Modern __JS__ is a 'safe' programming language. it does not provide low-level access to memory or CPU, because it was initially created for browsers which do not require it. __JS__ capabilities greatly depend on the environment it's running in. For example, __Node.js__ supports functions that allow __JS__ to read/write arbitrary files , perform network requests e.t.c., __in-browser JS__ can do anything related to webpage manipulation, interaction with the user, and the webserver.

For instance, __in-browser JS__ is able to:
* add new HTML to the page, change the existing content and modify styles.
* react to users actions, run on mouse clicks, pointer movements, key presses.
* send requests over the network to remove servers, download and upload files (so called AJAX and COMET technologies)
* get and set cookies, ask questions to the visitor and show messages.
* remember the data on the client side ('local storage')

# What CAN'T in-browser JavaScript do?
__JS's__ abilities in the browser are limited for the sake of the user's safety. the aim is to prevent an evil webpage from accessing private information or harming the user's data. Examples of such restrictions include:
* JS on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. it has not direct access to OS system functions.
* different tabs/windows generally do not know about each other. sometimes they do, for example when one window uses JS to open the other one. but even in this case, JS in from one page may not access the other if they come from different sites (from a different domain, protocol or port). This is called the "__Same Origin Policy__". To work around that, both pages must agree for data exchange and contain a special JS code that handles it.
* JS can easily communicate over the net to the server where the current page came from. but its ability to receive data from other sites/domains is crippled. thouh possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. once again, that's a safety limitation.

_REMARKS_: 
* _such limits do not exist if JS is used outside of the browser, for example on a server. modern browsers also allow plugins/extensions which may ask for extended permissions._
* _What makes JS unique?_: There are at least 3 great things about JS:
    * full integraton with HTML/CSS
    * simple things are done simply
    * support all major browsers and enabled by default.
* _JS is the only browser technology that combines these three things._
* _JavaScript is a case-sensitive language. The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters_

# Languages "over" JavaScript
Recently, plethora of new languages appeared, which _transpiled_ (converted) to JS before they run in the browser. Modern tools makes the _transpilation_ very fast and transparent, actually allowing developers to code in another language and auto-converting it "under the hood". __examples of such languages__:
1. __CoffeeScript__ - is a "syntactic sugar" for JS. it intoduces shorter syntax, allowing us to write clearer and more precise code. usually, Ruby devs like it.
2. __TypeScript__ - is concentrated on adding "_strict data typing_" to simplify the development and support of complex systems. it's developed by __Microsoft__.
3. __Flow__ - also adds data typing but in a different way. it's developed by __Facebook__
4. __Dart__ - is a standalone language that has its own engine that runs in non-browser environments (like mobile-apps), but also can be transpiled to JS. it's developed by __Google__.

# The Modern mode, "use strict"
For a long time, __JavaScript__ evolved without compatibility issues. new features were added to the language while old functionality didn't change. That had the benefit of never breaking existing code. but the downside was that any mistake or an imperfect decision made by JS creators got stuck in the language forever. This was the case until 2009 when __ECMAScript__ (ES5) appeared. it added new features to the language and modified the existing ones. to keep the old code working, most modifications are off by default. you need to explicitly enable them with a special directive "__use strict__"

The directive looks like a string: "__use strict__" or __'use strict'__. when it is located at the top of the script, the whole script works the "modern" way.
_Remarks_:
* make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.
* only comments may appear above "use strict"
* there is no directive like "no use strict" that reverts the engine to old behavior.once we enter strict mode, there's no return.
* for the future, when you use a browser console to test features, please note that it doesn't "use strict" by default.

# Attaching a script to a Webpage
For server-side environments (like __Node.js__) you can execute the script by command like "__node my.js__". JS programs can be attached to any part of an __HTML__ document with an help of a __< script >__ tag which contains JS code which is automatically executed when the browser processes the tag. The __< script >__ tag has a few attributes that are rarely used nowadays but can still be found in old code.
# Definitions of Terms
1. __Callback__: is a plain __JavaScript__ function passed to some method as an argument or option. it is a function that is to be executed after another function has finished executing, hence the name _"call back"_
2. __Closers__: are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. ot gives you access to an outer function's scope from an inner function.

# Alert, Prompt, and Confirm boxes
* an __alert__ box is used when you want to ensure that information gets through to the user when an alert box pops up, the user must click OK to proceed. the alert function takes a single parameter, which is the text displayed on the pop up boxes.
```js
    alert("Dou you really love me?");

    // to display line breaks within a popup box, use the backlash followed by the character n
    alert("do you really love him?\nmaybe")
```
* the __prompt__ often used to have a user input a value before entering a page. when a __prompt box__ pops up, the user will have to click Ok or Cancel to proceed after entering the input value. if the user clicks OK, the box returns the input value if the user clicks CANCEL, the box returns null.
```js
    // the prompt() method takes two parameters:
    // .the first is the label, which you want to display in the text box
    // .the second is a default string to display in the text box (optional)
    var user = prompt('kindly, enter your name to proceed');
    alert(user);
```
* __Confirm box__: is often used to have the user verify or accept something. when a confirm box pops up, the user must either click OK or Cancel to proceed.
```js
    // ..if the user clicks OK, the box returns true.
    // .if the user clicks Cancel. the box returns false
    var result = confirm("do yoy really want to leave this page?");
    if (result == true) {
    alert("Thank you for visiting this page");
    }
    else {
    alert("Thank for staying with us.ENJOY OUR SITE");
    };
```
# Console Methods
```js
    // console.log() - prints the message on the console
    const sampleObject = {firstName : "Rodgers", lastName : "Nyangweso"};
    console.log(sampleObject); // Output: { firstName: 'Rodgers', lastName: 'Nyangweso' }

    // console.error() - outputes an error message in the console. Helps in testing
    console.error("This is an error message"); // Output: This is an error message

    // console.warn() - outputs a warning message in the console
    console.warn("This a warning!") // output: This a warning!

    // console.time() - measure how long a task in the code takes to run
    // console.timeLog() - Outputs the current value of the time
    // console.timeEnd() - stops timing the opration and outputs the final value of the timer
    const message = "Time taken: ";
    console.time(message); // Output: undefined
    console.timeLog(message); // Output: Time taken: : 0.081ms
    console.timeEnd(message); // Output: Time taken: : 0.34ms

    // console.group() - groups the message in the console. very helpful when there are too many messages
    // console.groupEnd() - this ends the group which is initiated lastly
    console.group('Group I');
    console.group('First message under Group I'); 
    console.group('Second message under Group I'); 
    console.group('This group will be made under Group I'); 
    console.log('First message under sub-group of I');
    console.groupEnd('Exits the subgroup');
    console.groupEnd('Exits Group I');
    console.groupEnd('Exits Group I');
    console.log(2)

    // console.table() - outputs the array of objects in a clean and clear tabular form.
    const people = [
            {firstName : "Rodgers", lastName: "Nyangweso", age: 28, location: "Nairobi"},
            {firstName : "Wilson", lastName : "Nyangweso", age : 57, location : "Kisumu"}
    ]
    console.table(people);

    // console.assert() - outputs the message only when the condition (first argument) is evaluated as false
    const year = 2022;
    console.assert(year > 2023, 'This is true'); // Output: Assertion failed: This is true

    // console.trace() - traces how the code ended up at a certain point. very helpful method as it simplifies the debugging process
    function addition(x, y) {
        console.log(x + y);
    };

    function multiplication(x, y) {
        console.trace(x * y);
    };
    addition(2, 3); // Output: 5
    multiplication(2, 3);

    // console.count() - outputs the number of times a call is called in the console
    // console.countReset() - resets the counter
    for (i = 1; i <= 2; i++) {
        console.count();
    };

    for (i = 1; i <= 2; i++) {
        console.count();
    }

    // console.dir() - outputs the properties of the specified  objects in the console
    const person = {firstName : "Rodgers", lastName : "Nyangweso"};
    console.log(person); // Outputs: { firstName: 'Rodgers', lastName: 'Nyangweso' }
    console.dir(person); // Output: 
```
# JavaScript Frameworks
# Angular vs React
Parameter | Angular | React
|:----------:|:-----------:|:-------------:|
Type | Complete framework (everything is inbuilt including Routers, HTTP e.t.c) | __React__ is a JS library and is much older compared to __React__
Use of Libraries | __Angular__ is a complete solution in itself | ___React JS__ can be packaged with other programming libraries. (Since it is just a library it doesn’t have much of inbuilt functionalities)
Learning curve | Learning Angular is not easy for beginners. Thus, it requires lots of training. But it includes most of the concepts and thus you don’t need any external tools | It is easier to grasp compared Angular. However, it is difficult to learn when augmented with Redux. Quick to learn React whereas it takes time to learn external tools such as redux which is essential.
Installation Time | __Angular__ is easy to set up but may lead to an increase in coding time which also results in delayed project deliveries. | __React__ takes longer to set up. But, it is really fast for delivering projects and building apps.
Best Feature | __Angular__ offers a limited amount of freedom and flexibility. | __React__ gives you the freedom to choose the tools, architecture, and libraries, for developing an app.
Data Binding | __Angular__ uses the two-way data binding method. It helps you to ensure that the model state automatically changes when any change is made. | __React__ language uses one-way data binding, which means that the UI elements can’t be changed without updating the corresponding model state.
Testing and Debugging | In ___Angular__, testing and debugging for a complete project is possible with a single tool. | __React__ requires a set of tools to perform different types of testing.
Application Types | You should __Angular__ framework If you want to develop a SPA(Single Page Application) and mobile apps. | Use __React__ if you want to develop Native apps, hybrid apps, or web apps
Language used | __Angular__ uses Typescript which requires a bit of prior learning to be done. | __React__ is written in JavaScript which many programmers are familiar with, hence faster learning

# Pros and Cons of Angular
* Offers clean code development
* has a high performance
* has a Material Design-like interface
* has a Material Design-like interface
* Seamless updates using Angular CLI

# CONS OF ANGULAR
* It can be difficult to get a grip of especially for beginners
* Steep learning curve
* No clear manual and extensive
* Third party integration becomes very difficult
* It is difficult to switch to newer versions as compared to React

# PROS OF REACT
* easier to learn as compared to Angular.
* has HTML like syntax which helps in templating and makes the code easier to read.
* Native development is easier if you acquire React skills
* good for management of heavy loads with ease

# CONS OF REACT
* React uses traditional MVC framework and hence requires complex configuration.
* An in depth knowledge is required for integration the UI into MVC framework
* __Redux__ and Routing are external tools that need to be learnt, whereas Angular has most of these tools inbuilt.
# References
1. [JavaScript Tutorial - W3Schools](https://www.w3schools.com/js)
2. [Angular vs React, which is better?](https://medium.com/@shrusti.sangodkar11/react-vs-angular-which-is-better-a74cfe9941bb)