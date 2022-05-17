# JavaScript

## Table of Contents
- [Introduction to JavaScript](#Introduction-to-JavaScript)
    - [Difference between Java and Javascript](#Difference-between-Java-and-Javascript)
    - [Features of JavaScript](#Features-of-JavaScript)
    - [How do Engines work?](#How-do-Engines-work?)
    - [What CAN in-browser JavaScript do?](#What-CAN-in-browser-JavaScript-do?)
    - [What CAN'T in-browser JavaScript do?](#What-CAN'T-in-browser-JavaScript-do?)
    - [Languages "over" JavaScript](#Languages-"over"-JavaScript)
    - [The Modern mode, "use strict"](#The-Modern-mode,-"use-strict")
    - [Definitions of Terms](#Definitions-of-Terms)
    - [Attaching Scripts to a Webpage](#Attaching-a-script-to-a-Webpage)

- [Alert, Prompt, and Confirm boxes](#Alert,-Prompt,-and-Confirm-boxes)
- [Variables in JavaScript](#Variables-in-JavaScript)
- [Data Types in JavaScript](#Data-Types-in-JavaScript)
    - [typeof operator](#typeof-operator)
    
- [Comparisons Operators](#Comparisons-Operators)
- [Operators in JavaScript](#Operators-in-JavaScript)
- [Types Conversion in JavaScript](#Types-Conversion-in-JavaScript)
- [Function Expressions and Arrow Function](#Function-Expressions-and-Arrow-Function)
    - [Examples of functions](#Examples-of-functions)
    - [Reverse Character Function](#Reverse-Character-Function)
    - [FizzBuzz Function](#FizzBuzz-Function)

- [Control Structure in JavaScript - Conditonal and Loops](#Control-Structure-in-JavaScript)
    - [if statement](#if-statement)
    - [else statement](#else-statement)
    - [else if statement](#else-if-statement)
    - [switch statement](#switch-statement)
    - [for loops](#for-loops)
    - [while Loop](#while-Loop)
    - [do..while Loop](#do..while-Loop)

- [Objects in JavaScript](#Objects-in-JavaScript)
    - [Creating objects using object literal (initializer)](#Creating-objects-using-object-literal-(initializer))
    - [creating objects using object constructor function](#creating-objects-using-object-constructor-function)
    - [Objects Methods](#Object-methods)
    - [Core Objects 1: Arrays](#Core-Objects-1:-Arrays)
        - [Ways of Creating Arrays](#Ways-of-Creating-Arrays)
        - [Array Methods](#Array-Methods)
    
    - [Core Objects 2: Math Object](#Core-Objects-2:-Math-Object)
        - [Math Object Methods](#Math-Object-Methods)

    - [Core Objects 2: Date Object](#Core-Objects-2:-Date-Object)
        - [Date Methods](#Date-Methods)
    
- [JavaScript Frameworks](#JavaScript-Frameworks)
    - [Angular vs React](#Angular-vs-React)
    - [PROS OF ANGULAR](#PROS-OF-ANGULAR)
    - [CONS OF ANGULAR](#CONS-OF-ANGULAR)
    - [PROS OF REACT](#PROS-OF-REACT)
    - [CONS OF REACT](#CONS-OF-REACT)
    - [Angular](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/AngularJS)
    - [React](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/React)

- [References](#References)



# Introduction to JavaScript
__JavaScript__ was initially created to make "web pages alive". the programs in this langauge are called __scripts__. they can be written right in a web page's HTML and run automatically as the page loads. __Scripts__ are provided and executed as plain texts. they don't need special preparation or compilation to run. - in this aspect, JS is very different from another programming language called __Java__.

Today, __JS__ can execute not only in the browser, but also on the server, or actually on any device that has a specal program called the __JavaScript Engine__. The browser has an embeded engine sometimes called a "__JavaScript virtual machine__". Different engines have different 'codenames'. For example:
1. V8 - in Chrome and Opera
2. SpiderMonkey - in Mozilla Firefox
3. there are other codenames like "Trident" and "Chakra" for different versions of Internet Explorer, "ChakraCore" for Microsoft Edge, "Nitro" and "SquirellFish" for Safari, e.t.c.,

__JavaScript__ is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.

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
When you write JS, how does the browser understands what has been written? This is handled by a __JS Engine__ and different browsers have different __JS Engine__. 

# V8 Engine
the purpose of __v8 Engine__ is to convert JS code into a binary so that the computer can understand. Components of the __v8 Engine__ are as follows:
* __Memory Heap__: this is where memory allocation happens
* __Call Stack__: this is to keep track of where we are in the code execution.

_Remarks_: 
* _How do we get to machine code?_: To get to machine code, JS file will either have to be __compiled__ or __interpreted__.
* _Compilation_: the entire source code is converted to machine code at once.
* _Interpretation_: there is an interpreter which runs through the source code and executes it line by line.
* _Is JS compiled or interpreted?_: JS used to be purely interpreted language  but the problem with an __interpreted__ language is that they are much, much slower than the __compiled__ languages. Modern __JS Engine__ now uses both a mix between _compilation_ and _interpretation_ which is J-I-T (Just In Time) compilation.

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
# Variables in JavaScript
__Variables__ are used to store information.

```js
// to create a variable in JS use the let keyword
let message;

// now, we can put some data into it by using the assignment operator =;
message = 'Hallo World!'; // store the string

// the string is now saved into the memory area associated with the variable and we can access it using the variable name
alert(message);
```

"__var__" instead of "__let__": in older scripts you may also find another keyword: "__var__" instead of "__let__" 
```js
    var name = 'paul';
```
the "var" keyword is almost the same as "let". it also declares a variable but in an old fashioned way. there are subtle differences between "var" and "let" 

_Remark_: _When the value of a variable is changed, the old data is removed from the variable_
```js
    let message1;
    message1 = 'old variable';
    message1 = 'new variable';

    alert(message1); // Output: 'new variable'
```
_Remark_: _we can also declare two variables and copy data from one into the other_
```js
    let firstName = 'rodgers';
    let secondName;

    // copy 'rodgers' from firstName into secondName
    secondName = firstName;

    // now, two variabels hold the same data
    alert(firstName);
    alert(secondName); // Output: 'rodgers'
```
_REMARK_: __Functional languages__: _it is intersting to note that there exist __functional programming languages__ like __Scala__ and __Erlang__ that forbid changing variable values. in such languages, once tha value is stored, it's there forever. if we need to store something else, the language forces us to create/declare a new variable. we can't reuse the old one. though it may seem a little odd at first sight, these languages are quite capable of serious development_

__Constants__: to declare a constant(unchanging) variable, use __const__ instead of __let__
```js
const myBirthDay = '25.03.1994';
```
variables declared using __const__ are called "constants". they cannot be changed. any attempt to change a contant would cause an error. when a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate the fact to everyone

# Data Types in JavaScript
A __variable__ in JS can contain any data type. a variable can at one moment be a __string__ and at another be a __number__
```js
let message = 'Hello!';
    message = 123;
```
Programming languages that allow such things are called "__dynamically typed__", meaning that there are data types, but variables are not bound to any of them.

1. __Number__: represents both _integer_ and _floating_ point numbers. there are many operations for numbers, e.g., 
    * multiplication (*), 
    * division (/), 
    * addition (+), 
    * subtraction (-) and so on
    ```js
    let n = 35;
        n = 35.76;
    ```
    Besides regular numbers, there are so-called "special numeric values" which also belong to this data type
    * __Infinity__ - represents a number whose value is greater than any other number.  we can get as a result of division by zero:
    ```js
    alert(1 / 0);
    ```
    ... or just reference it directly
    ```js
    alert(Infinity);
    ```
    * __-Infinity__
    * __NaN__ - represents a computational error. it is a result of an incorrect or undefined mathematical operation, for instance:
    ```js
      alert("not a number" / 2); 
    ```
    __NaN__ is sticky and any operation on __NaN__ returns __NaN__. so if there is a __NaN__ somewhere in a mathematical expression, it propagates to the whole result
    ```js
    alert("not a number" / 2 + 6);
    ```
    _Remark_: __Mathematical Operations are safe__: _doing maths is 'safe' in javascript. we can do anything, divide by zero, treat non-numeric strings as numbers, e.t.c., the script will never stop with a fatal error ("die"). at worst, we'll get __NaN__ as a result_

2. __String__: _double_ and _single quotes_ are "simple" quotes. there is no difference between them in javascript
    ```js
    let str = 'hello';
    let str1 = "double quotes are ok too";
    let phrase = `can embed ${str}`;`
    ```
    _backsticks_ are "extended functionality" quotes, they allow us to embed variables and expressions into a string by wrapping them in ${...}, for example:
    ```js
    let name = 'john';

    // embed a variable
    alert(`hello, ${name}!`);

    // embed an expression
    alert(`the result is ${1 + 2}`);
    ```

3. __Boolean__ (logical type): has only two values: _true_ and _false_. this type is mostyly used to store yes/no values
    ```js
     let nameFieldChecked = true;
     let ageFieldChecked = false;
    ```
    __boolean__ values also comes as a result of comparison
    ```js
        let isGreater = 4 > 1;
        alert(isGreater);
    ```

4. __null__: the special __null__ value does not belong to any of the types described above. it forms a seperate type of its own which contains only the __null__ value:
    ```js
    let age = null;
    ```
    in JS, __null__ is not a reference to "__non-existing object__" or a "__null pointer__" like in othere some languages. it's just a special value that represents "__nothing__", "__empty__", or a "__value unknown__". the code above states that the age is unknown or empty for some reasons 

5. __undefined__: the special value "__undefined__" also stands apart. it makes a type of its own just like __null__. the meaning of "__undefined__" is "__value not assigned__". if a variable is _defined but not assigend_, then its value is "__undefined__"
    ```js
        let x;
        alert(x); // shows undefined
    ```
    Technically, it is possible to assign __undefined__ to any variable:
    ```js
        let y = 12346;
        y = undefined;
        alert(y); // undefined
    ```
    but it's not recommended to do that. normally, you should use __null__ to assign an "__empty__" or "__unknown__" value to a variable. and we use "__undefined__" for checks like seeing if a variable has ben assigned.

6. __Objects and Symbols__: the object type is special. all the other types are called "__primitive__" because their value can contain only a single thing(be it a __string__, a __number__ or whatever). in contrast, __objects__ are used to store collections of data and more complex entities. the symbol type is used to create a unique identifier for objects.
    ```js
        // Creating an Object in JS
        var emp = {
            name: "Rodgers",
            age: 26
        };
    ```

# typeof operator
the __typeof__ operator returns the type of an argument. it supports two types of syntax:
* as an operator: typeof x
* as a function: typeof(x)
```js
    typeof undefined; // undefined
    typeof 0; // number
    typeof true; // boolean
    typeof "foo"; // string
    typeof Symbol("id"); // symbol
    typeof Math; // Object
    typeof null; // object
    typeof alert; //function
```
_Remark_: _for null it retuns "__object__". this is an error in the language, it's not actually an object. it is an officially recognized error in __typeof__, kept for compatibility. of course, __null__ is not an object, it is a special value with a seperate type of its own.


# Comparisons Operators
Like all other operators, a comparison returns a value. in this case, the value is a boolean
 * Greater/less than: a > b, a < b
 * Greater/less than or equals: a >= b, a <= b
 * Equals: a == b
 * Not equals: a != b 

 a comparison result can be assigned to a variable, just like any other value
```js
let result = 5 > 4;

alert(result); // Output: true
```

_Remark_: __String Comparison__ to see whether a string is greater than another, JS uses the so-called "dictionary" or "__lexicographical__" order. i.e., strings are compared letter-by-letter
```js
alert('Z' > 'A'); // Output: true
alert('Glow', > 'Glee'); // Output: true
```

_Remark_: case matters. a capital "A" is not equal to the lowercase "a". which one is greater? the lowercase "a". __Why?__ _because the lowercase character character has a greater index in the internal encoding table JavaScript uses (Unicode)_
```js
    alert('Z' > 'a'); // Output: false
```

_Remark_: __Comparison of different types__: when comparing values of different types, JS converts the values to numbers. _for example_:
```js
    alert('2' > 1); // true, string '2' becomes number 2
    alert( '01' == 1); // true, string '01' becomes number 1

    // For boolean values, true becomes 1 and false becomes 0
    alert(true == 1); // true
    alert(false == 0); // true
```
_Remark_: _A funny consequence_: if it's possible that at the same time: Two values are equal, one of them is __true__ as a boolean and the other one is __false__ as a boolean. for example:
```js
    let a = 0;
    alert (Boolean(a)); // false

    let b = "0";
    alert( Boolean(b)); // true

    alert( a == b); // true

    // from JS standpoint, this result is quite normal
    // an equality check converts values using the numeric conversion (hence '0' becomes 0), while the explicit Boolean conversion uses another set of conversion 
```
* __Strict Equality__: a regular equality == has a problem, it cannot differentaite between 0 and false:
```js
    alert( 0 == false); // true

    // the same thing happens with an empty string:
    alert( '' == false); // true
```
_Remark_: _this happens because the operands of different types are converted to numbers by the equality operator ==. an empty string, just like false becomes a zero. what to do if we want to differentiate 0 from false? A strict equality operator === checks equality withot type conversion. i.e., if a and b are of different types, then a === b immediately returns false without an attempt to convert them_
```js
    alert(0 === false); // false, because the types are different
```
_Remark_: 
* _there's also a "strict non-equality" operator !== analogous to !=. the strict equality operator is a bit longer to write, but makes it obvious what's going on and leaves less rom for errors_
* __Comparison with null and undefined__: there is non-intuitive behavior when null or undefined are compared to other values
* for a strict equality check ===. these values are different because each of them is a different types
```js
    alert( null === undefined); // false
```
* for a non-strict check ==. there's a special rule. these two are the "sweet couple": they equal each other (in the sense of ==), but not any other value
```js
    alert( null == undefined); // true
```
* __For maths and other comparisons <> <= >=__ null/undefined are converted to numbers: null becomes 0, while undefined become NaN
* Now let's see some funny things that happen when we apply these rules. And, what's more important, how to not fall a trap with them:
```js
    // Strange result: null vs 0
    // let's compare null with zero:
    alert( null > 0); // false
    alert( null == 0); // false
    alert( null >= 0); // true

    // mathematically, that's strange.
    // the last result states that "null" is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.
    // the reason is that an equality check == and comparisons > < >= <= work differently.
   // comparisons convert null to a number, treating it as 0. that's why null > 0 is false.

   //  on the other hand, the equality check == for undefined and null is defined such that without any conversions, they equal each other and don't equal anything else. that's why null == 0 is false.
```
* __An incomparable undefined__ the value undefined shouldn't be compared to other values:
```js
    alert( undefined > 0); // false
    alert( undefined < 0); // false
    alert( undefined == 0); // false

    // why does it dislike zero so much? we get these results because:
    // the above comparisons return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons
    // the equality check returns false because undefined only equals null, undefined, and no other value.
```
# Operators in JavaScript
* An __operand__ is what operators are applied to.
* an __operator__ is __unary__ if it has a _single operand_. for example, the _unary negation_ - reverses the sign of a number 
    ```js
        let x = 1;
        x = -x;
        alert(x); // -1, unary negation was applied
    ```
* an __operator__ is __binary__ if it has two __operands__
    ```js
        let y = 1, z = 6;
        alert(x - y); // -5,  binary minus subtracts values

        // string concatenation, binary +
        let s = "my" + " string";
        alert(s); // "my string"

        // note that if one operand is a string, the other one is converted to a string too
        alert("1" + 2); // 12

        alert(1 + "2"); // 12
    ```
    _Remark_: _so it doesn't matter if the first or second operand is a string. the rule is simple: if either operand is a string, the other one is converted into a string too. however, note that operations runs from left to right: if there are two numbers followed by a string, the numbers will be added before converted to a string_
    ```js
        alert(3 + 5 + "1"); // 81 and not 351

        alert("1" + 3 + 5); // 135
    ```

    _Remark_: _string concatenation and conversion is a special feature of the binary plus +. other arithmetic operators work only with numbers and always convert their operands to numbers. for example:_
    ```js
        alert(2 - '1'); // 1
        alert(2 / '4'); // 0 .5
    ```
* __umeric conversion, unary +__: the plus + exist in two forms: the __binary form__ that we've used above and the __unary form__. the __unary plus__ or, in other words, the plus operator + applied to a single value doesn't do anything to numbers. but if the operand is not a number, the unary plus converts it into a number. _for example:_
    ```js
         // no effect on numbers 
        let v = 1;
        alert(+v); // 1

        let w = -2;
        alert(+w);  // -2
    ```
    _Remark_: _converts non-numbers_: it actually does the same thing as Number(...) but its shorter
    ```js
        alert(+true); // 1
        alert(+""); // 0
    ```
    _Remark_: _the need to convert strings to numbers arises very often . for example if we are getting values from HTML form fields, they are usually strings. what if we want to sum them? the binary plus would add them as strings:_
    ```js
        let apples = "2";
        let oranges = "3";

        alert(apples + oranges); // the binary plus concatenates the strings

        // if we want to treat them as numbers, we have to convert and sum them
        // both values converted to numbers before the binary plus
        alert(+apples + +oranges); // 5

        // the longer variant
        alert(Number(apples) + Number(oranges));
    ```
    _Remark_: _from the mathematician's standpoint, the abundance of pluses may seem strange but from the programer's standpoint, there's nothing special: __unary pluses__ are applied first, they convert strings to numbers and then the binary plus sums them up. why are unary pluses applied to values before the binary ones? as we are going to see, that's because of their higher precedence_

* __Operator Precendence__: if an expression has more than one operator, the execution order is defined by their precedence, or in other words, the default priority order of operators. e.g., 
    * the multiplication (*) has a higher precedence than addition +
    * parentheses () overrides the precedence
 
    there are many operators in JS. every operator has a corresponding precedence number. the one with the larger one executes first. if the precedence is the same, the execution is from left ro right.

* __Assignment__: let's note that the assignment  (=) is also an operator. it's listed on the precedence table with a very low priority of 3. that's why when we assign a variable like x = 2 * 2 + 1, the calculations are done first and then = is evaliated, storing the result in x.
    ```js
        let h = 6 * 6 + 1;
        alert(h); // 37

        // it is possible to chain assignments
        let a, b, c;
        a = b = c = 2 + 2;
        alert(a); // 4
        alert(b); // 4
        alert(c); // 4

        // chained assignment evaluates from right to left:
        // firts the right most expression 2 + 2 is evaluated and then assigned to the variable c, b and a. at the end, all the variables share the same value
    ```

* __Remainder (%)__: the result of a % b is the remainder of integer division of a and b
* __Exponentiation (**)__: exponentiation is a recent addition to the language.
* __Increment/Decrement__: increasing or decreasing a number is one among the most  common numerical operations. so, there are special operators for it 
    ```js
        // Increment ++ increases a variable by 1:
        let counter = 2;
        counter++; // works the same as counter = counter + 1 but shorter
        alert(counter); // 3

        // Decrement -- decreases a variable by 1:
        let counter2 = 3;
        counter2--; // works the same as counter2 = counter2 - 1, but shorter
        alert(counter2); // 2
    ```
    _Remarks_:
    * Increment/Decrement can only be applied to variables. trying to use it on a value like 8++ causes an error
    * the opertor ++ and -- can be placed either before or after a variable. when the operator goes before a variable it is in the '__prefix form__': ++counre. when the operator goes after a variable it is the '__postfix form__': counter++. both of these stements do the same thing, increase counter by 1. is there any difference? Yes but we can only see it if we use the returned value of ++/--
    * let's clarify. as we all know, all operators return a value. Increment/Decrement is no exception. the prefix form returns the new value (prior to incemrnt/decrement). the postfix form returns the old value(prior to incemrnt/decrement)
    ```js
         let counter3 = 1;
         let d = ++counter3; 
         alert(d); // 2, the prefix form ++counter3 increments counter3 and returns the new value 2. so the alert shows 2

        // Now, let's use postfix form
        let counter4 = 1;
        let e = counter4++;
        alert(counter4); // 1, the postfix form counter4++ also increments counter4 but returns the old value (prior to increment). so the alert shows 1

        // to summarize: if the result of increment/decrement is not used there is no differnce in which form to use
        let counter5 = 0;
        counter5++;
        ++counter5;
        alert(counter5); // alert 2, the lines above did the same

        // if we'd like to increase a value and immediately use the result of the operator, we need the prfix form:
        let counter6 = 0;
        alert( ++counter6 ); // 1

        // if we'd like to increment a value but use its previous value, we need the postfix form
        let counter7 = 0;
        alert( counter7++); // 0 
    ```
    _Remark_: _increment/decrement among other operators_: _the operators +++/-- can also be used inside expressions. their precedence is higher than most other arithmetic operations. for instance:_
    ```js
        let counter8 = 1;
        alert(2** ++counter8); // 4

        // compare with:
        let counter9 = 1;
        alert(2 * counter9++); // 2, because counter9++ returns the old value

        // though technically okay, such notation usually makes code less readable. one line does multiple things- not good
        // while reading a code, a fast "vertical" eye-scan can easily miss something like counter++ and it won't be obvious that the variable increased
        // we advise a style of one-line one-action
        let counter10 = 1;
        alert( 2 * counter10); // 2
        counter10++;  // 1
    ```
* __Bitwise Operators__: bitwise operators treat arguments as 32-bit integer and work on the level of their binary representation. these operators are not JavaScript specific. they are supported in most programming languages. the list of operators are as follows:
    * AND (&)
    * OR (|)
    * XOR (^)
    * NOT (~)
    * LEFT SHIFT (<<)
    * RIGHT SHIFT (>>)
    * ZERO-FILL RIGHT SHIFT (>>>)

* __Modify-in-place__: we often need to apply an operator to a variable and store the new result in thta same variable. for example:
    ```js
        let n = 2;
        n = n + 5;
        n = n * 2;
        // this notation can be shortened using the operators += and *=

        let n1 = 2;
        n1 += 5; // now n1 = 7 (same as n1 = n1 + 5)
        n1 *= 2; // now n1 = 14 (same as n1 = n1 * 2)
        alert(n1); // 14

        // short "modify-and-assign" operators eixsts for all arithmetical and bitwise operators: /=, -=, e.t.c.
        // such operators have the same precedence as a normal assignment so they run after most other calculations
        let n2 = 2;
        n2 *= 3 + 5;
        alert(n2); // 16 (right part evaluated first, same as n2 *= 8)
    ```

* __Comma__: the comma operator (,) is one of the rarest and most unusual operators. it is used to write a shorter code.the comma operator allows us to evaluate several expressions, dividing them with a comma ,. each one of them is evaluated but only the result of the last one is returned. for example:
    ```js
        let a1 = (1 + 2, 3 + 4);
        alert(a1); // 7 (the result of 3 + 4)
        // here, the first expression 1 + 2 is evaluated and its result is thrown away.then, 3 + 4 is evaluated and returned as the result
    ```
    _Remarks_: 
    * _comma has a very low precedence. comma has a very low precedence, lower than =, so parentheses are important in the example above. without them, a1 = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a1 = 3, 7 then the assignment operator = assigns  a1 = 3, and the rest is ignored_
    * _why do we need an operator that throws away everything except the last expression? sometimes, people use it in more complex constructs to put several actions in one line_
    ```js
        // for example:
        // three operations in one line
        for (a = 1, b = 3, c = a * b; a < 10; a++) {
            ...
        }
        // such tricks are used in JavaScript 
    ```
# Math Operations
* addition (+)
* subtraction ( - )
* multiplication (*)
* division (/)
* modulo (%)
* increment (++)
* decrement (--)

# Types Conversion in JavaScript
Most of the time, operators and functions automatically converts the values given to them to the right type. for example, __alert__ automatically converts any value to a string to show it. mathematical operations converts values to numbers. there are also cases where we have to explicitly convert a value to an expected type.  
* __ToString__ string conversion happens when we need the string form of a value. for example, alert(value) does it to show the value
```js
    // we can also call the String(value) function to convert a value to a string
    let value = true;
    alert(typeof value); // boolean

    value = String(value); // now value is a string true
    alert(typeof value); // string
```
* __ToNumber__: numeric conversion happens in mathematial functions and expressions automatically. for example, when division is applied to non-numbers 
```js
    // strings are converted to numbers
    alert("78" / "45");

    // we can use the Number(value) function to explicitly convrt a value to a number
    let str = "123456";
    alert(typeof str); // string

    let num = Number(str); // becomes number 123456
    alert(typeof num);
```
_Remark_: _explicit conversion is usually required when we read a value from a string-based source like a text form but expect a numner to be entered. if the string is not a valid number, the result if such conversion is NaN. for instance_
```js
    let age = Number("an arbitrary string intead of a number");
    alert(age); // NaN, conversion failed.
```
_Numeric Conversion rules:_
| Value | becomes|
|:--------:|:----------:|
undefined | NaN
true and false | 1 and 0
string | whitespaces from the start and end are removed. if the remaining string is empty, the result is 0. otherwise the number is "read" from the string. an error gives NaN

```js
    alert( Number(  "1233")); // 123
    alert( Number("123a")); // NaN
    alert( Number(true)); // 1
    alert( Number(false)); // 0
    alert( Number(undefined)); // NaN
    alert( Number(null)); // 0

```
* __Addition '+' concatenates strings__ almost all mathematical operations converts values to numbers.a notable exception is the addition "+". if one of the added values is a string, the other one is also converted to a string. then, it concatenates (join) them
```js
    alert("1" + 2); // 12
    alert(1 + "2"); // 12

    // this only happens if atleast one of the arguments is a string. otherwise values are converted to numbers
```

* __ToBoolean__: Boolean conversion is the simplest one. it happens in logical operations but can also be performed explicitlywith a call to Boolean(value). the conversion rules:
    * values that are intutively "empty", like 0, an empty string, null, undefined, and NaN becomes false
    * other values becomes true
    ```js
        alert(Boolean(1)); // true
        alert(Boolean(0)); // false

        alert(Boolean("hello")); // true
        alert(Boolean("")); // false

        // NOTE: a string with zero "0" is true. some languages like PHP treat "0" as false. but in JS, a non-empty string is always true
        alert(Boolean("0")); // true
        alert(Boolean(" ")); // spaces, is also true
    ```
# Function Expressions and Arrow Function
In __JavaScript__, a function is not a “magical language structure”, but a special kind of value.

# Function Expression vs Function Declaration
Let’s formulate the key differences between Function Declarations and Expressions. 
* __Function Declaration__: a function, declared as a separate statement, in the main code flow.
* __Function Expression__: a function, created inside an expression or inside another syntax construct. Here, the function is created at the right side of the “assignment expression” =:
* The more subtle difference is when a function is created by the JavaScript engine. A __Function Expression__ is created when the execution reaches it and is usable only from that moment. Once the execution flow passes to the right side of the assignment let sum2 = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on. __Function Declarations__ are different. A __Function Declaration__ can be called earlier than it is defined. For example, a global Function Declaration is visible in the whole script, no matter where it is. That’s due to internal algorithms.When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So it has access to these functions.
```js
    // function declaration
    function sayHi() {
     console.log( 'Hi' ); // you can use alert
    };
    console.log(sayHi()); // 'Hi'
```
* There is another syntax for creating a function that is called a __Function Expression__.
```js
    // function expression
    let sayHi2 = function() {
        alert( 'Hi' );
        // Here, the function is created and assigned to the variable explicitly, like any other value. 
    };
```
_Remark_: _No matter how the function is defined, it’s just a value stored in the variable sayHi. The meaning of these code samples is the same: "create a function and put it into the variable sayHi"._

* We can copy a function to another variable:
```js
  function sayHi3() { 
    // create (1)
      alert( 'Hello' );
    }

    let func = sayHi3; // copy (2)

    func(); // Hello
```

* __Callback functions__: Let’s look at more examples of passing functions as values and using function expressions. We’ll write a function ask(question, yes, no) with three parameters:
    * question: Text of the question
    * yes: Function to run if the answer is “Yes”
    * no Function to run if the answer is “No”
    * The function should ask the question and, depending on the user’s answer, call yes() or no():
    ```js
        function ask(question, yes, no) {
            if (confirm(question)) yes()
            else no;
        }

        function showOk() {
            alert('You agreed');
        }

        function showCancel() {
            alert('You Cancelled the execution!');
        }

        // usage: functions showOk and showCancel are passed as atguments to as
        // ask( 'Do you agree?', showOk, showCancel);
    ```
    * The arguments showOk and showCancel of ask are called callback functions or just callbacks.
    * The idea is that we pass a function and expect it to be “called back” later if necessary. 
    * In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

    * We can use __Function Expressions__ to write the same function much shorter:
    ```js
        function ask2(question, yes, no) {
        if(confirm(question)) yes()
        else no();
        }

        ask2(
            "Do you agree?",
            function() { alert("You agreed!") },
            function() { alertt( "You cancelled the execution" ); }
        );
    ```
    * Here, functions are declared right inside the ask2(...) call. 
    * They have no name, and so are called __anonymous__. Such functions are not accessible outside of ask2 (because they are not assigned to variables), but that’s just what we want here.
    * Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.
* __document.write() function__: writes a _string_ to the __HTML__ document. This function can be used to write _text_, _HTML_, or Both. The __document.write()__ method should be used for testing.
    ```js
        document.write('This is a document dot write function');
    ```
    Just like HTML, we can use HTML tags to format texts in JS. we can output the text as a heading
    ```js
        document.write("Hello, world!");
        document.write("<h1>Using document dot write function to format texts</h1>")
    ```
# Types of JS Functions
1. __eval() function__: You can get the result of a __string expression__ using the __eval() function__, which takes a string expression argument and returns the result. If the argument is empty, it returns __undefined__.
```js
    eval("10 * 20 + 8"); // 208
```
# Examples of functions
```js
    function getPerson() {
    return
    {
        fullName: 'Rodgers Nyangweso'
    }
}

console.log(getPerson()); // { fullName: 'Rodgers Nyangweso' }
```
# Reverse Character Function
```js
    function reverseCharacters(input) {
    if(typeof input === 'string') {
        return input.split('').reverse().join('');
    } else if (typeof input === 'number') {
        return Number(input.toString().split('').reverse().join(''));
    }
    };
    console.log(reverseCharacters('rodgers')); // sregdor
    console.log(reverseCharacters(45));

    function completeReversal(arr) {
        const retVal = [];
        for (let i = 0; i< arr.length; i++) {      
            const currentItem = arr[i];
            const reversedItem = reverseCharacters(currentItem);
            retVal.unshift(reversedItem);
    
        } return retVal;
    };
    let array1 = [1, 2, 3, 4, 5];
    let array2 = ['rodgers', 'omondi', 'nyangweso'];
    console.log(completeReversal(array1)); // [ 5, 4, 3, 2, 1 ]
console.log(completeReversal(array2)); // [ 'osewgnayn', 'idnomo', 'sregdor' ]
```
# FizzBuzz Function
```js
    const upperBoundInclusive = 100;

    for (let i = 1; i <= upperBoundInclusive; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
```
# Control Structure in JavaScript
# if statement
use if to specify a block of code that will be executed if a specified condition is true:
```js
    // this statement will be executed only if a specified conditin is true
    if (condition) {
        statements;
    }
```
```js
    var a = 7;
    var b = 10;

    if (a < b) {
        document.write("JS is starting to get easier");
    }; // JS is starting to get easier
```
# else statement
```js
    // syntax
    if (condition) {
        // executed if conditon is true
    }
    else {
        // executed if conditon is false
    }
    // you can skip the curly braces if your code under tyhe condition contains only one command
```
```js
    var a = 7;
    var b = 10;

    if (a > b) {
        document.write("A is greater than B");
    }
    else {
        document.write("A is less than B");
    };
    // A is less than B
```
_Remark_: _there is also another way to do this check using the ? operator:_
```js
    a > b? document.write("A is greater than B"): document.write("Not Allowed!"); // A is less than B
```

# else if statement
you can use the else if statement to specify a new condition if the first condition is FALSE
```js
    var dayOfWeek = 'Monday';

    if (dayOfWeek == 'Monday') {
        document.write(`Today is ${dayOfWeek}, we are eating Pizza and Soda`);
    }
    else if (dayOfWeek == 'Tuesday') {
        document.write(`Today is ${dayOfWeek}, we are eating Ugali and Kales`);
    }
    else {
        document.write("Day is not specififed");
        // THE FINAL else block will be executed when none of the conditions is true
    };
```
```js
    var onLineStatus = 1;
    var message;

    if (onLineStatus == 1) {
        message = "User is online!";
    } else if (onLineStatus == 0) {
        message = "User is Offline!";
    } else {
        message = "User is away";
    };
    document.write(message);
```
# switch statement
in cases when you need to test for multiple conditions, writing _if else statements_ for each condition might not be the best solution. the _switch statement_ is used to perform  different actions based on the different conditions.
```js
    // syntax
    switch (expression) {
        case n1:
            statements
            break // when JS code reaches a break keyword, it breaks out of the switch block .this will stop the executuion of more code and case testing inside the block
        case n2:
            statements
            break; // usually, a break should be put in each case statement
        default: // the default keyword specifies the code to run if there is no case match
            statements
    }
```
the __switch expression__ is evaluated once. The value of the expression is compared with the values of each case. if there is a match, the associated block of code is executed.
```js
    var day = 8;
    switch (day) {
        case 1:
            document.write("Monday");
            break;
        case 2:
            document.write("Tuesday");
            break;
        case 3:
            document.write("Wednesday");
            break;
        case 4:
            document.write("Thursday");
            break;
        case 5:
            document.write("Friday");
            break;
        case 6:
            document.write("Saturday");
            break;
        case 7:
            document.write("Sunday");
            break;
        default:
            document.write("Error in the specified date!")
    }; // Error in the specified date!
```
```js
    var c = 4;

    switch (c) {
        case 1:
            document.write(c + 1);
            break;
        case 2:
            document.write(c + 2);
            break;
        default:
            document.write(c + 1);
    }; // Output: 5
```
```js
    var color = 'yellow';

    switch(color) {
        case "blue":
        document.write(`The color is ${color}`);
        break;

        case "green":
            document.write(`The color is ${color}`);
            break;
        default: // the default block can be omitted, if there is no need to handle the case when no match is found
            document.write(`The color is ${color}`);
    }; // The color is yellow
```
```js
    var day_of_week = 1;

    switch (day_of_week) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        document.write("working days");
        break;
        case 6:
        document.write("saturday")
        break;
        default:
        document.write('today is sunday');
    }; // Outpout: working days
```
# for loops
__loops__ can execute a block of code a number of times. they are handy in cases inwhich you want to run the same code repeatedly,adding a different value each time. JS has three types of loops: 
* for, 
* while, and 
* do while.
```js
    // syntax
    for (statement 1: statemtn 2: statement 3) {
        // code block to be executed
    };
    // statement 1 is executed before the loop  (the code block) starts
    // statement 2 defines the condition for running the loop (the code block)
    // statement 3 is executed each time after the loop (the code block) has been executed
```
```js
    // lists numbers between 1 to 10
    for (i=1; i<=10; i++) {
        if (i == 5) { // once it reaches 5, it will break out of the loop
            break; // the break statement jumps out of a loop and continues executing the code after the loops
        }
    document.write(i + "<br/>");
    };
    // statement 1 sets a variable before the for loop starts (var i = 1)
    // statement 2 defines the condition for the for loop to run ( i must be less than or equal to 10)
    // statement 3 increases a value (i++) each time the code block in the loop has been executed

    // statement 1 is optional, and can be omitted, if your values are set before the loop starts
    var i = 1;
    for (; i<=10; i++) {
    document.write(i + "<br/>");
    };

    // also, you can initiate more than one value in statement 1, using commas to seperate them
    for (i =1, text=""; i <= 5; i++){
    text = i;
    document.write(i + "<br/>");
    };
```
 _Remarks_:
    *  _you can use the __return__ keyword to return some value immediately from the loop inside of a fuction. This will also break the loop_
    ```js
        for (i = 0; i <= 10; i++) {
        if (i == 5) {
            continue; // the continue statement breaks only one iteration in the loop, and continues with the next iteration
        }
        document.write(i + "<br/>"); // the value 5 is not printed because continue skips that iteration of the loop
        }
    ```
    * _Example 1_: for loops
    ```js
        # Example 1:
        var sum = 0;
        for (i = 4; i < 8; i++) {
        if (i == 6) {
            continue;
        }
        sum += i;
        }
        document.write(sum); // Output: 16
    ```
# while Loop
the __while loop__ repetas through a block of code as long as a specified condition is true.
```js
    // syntax
    while (conditon) {
        // code block
    };
    // the condition can be any conditional statement that returns true or false
```
```js
    var c = 1;

    while (c<=10) {
        document.write(c + "<br/>");
        c++;

        // the loop will continue to run as long as c is less than, or equal 10. each time the loop runs, it increases by 1
        // be careful writing conditions, if a condition is always true, the loop will run forever
        // if you fail to increase the variable used in the condition, the loop willl neer end
        // make sure that the condition in a while loop eventually becomes false
    };
```
# do..while Loop
the __do..while loop__ is a variant of the __while loop__. this loop will execute the code block once, before checking if the condition is true and then it will repeat the loop as long as the condition is true.
```js
    // syntax
    do {
        // code block
    }
    while (condition);
```
```js
    var d = 20;

    do {
        document.write(d + "<br/>");
        d++;
    }
    while (d <= 25); // this prints out numbers from 20 to 25
    // the loop will always be executed at least  once, even if the condition is false, ..............because the code block is executed  before the condition is tested
```
# Objects in JavaScript
__JS variables__ are containers for data values. __Objects__ are variables too but they contain many values. think of an object as q list of values that are written as name:value pairs, seperated by colons.
# Creating objects using object literal (initializer)
this allows you to create only a single object
```js
    var person = {
    name : "Rodgers",
    age : 28,
    favColor : "blue",
    height : 23
    };
    // these values are called properties
```
* you can access properties in two ways:
    * objectName.propertyName
    * objectName['propertyName']
```js
    var person = {
    name : "Rodgers",
    age : 28,
    favColor : "blue",
    height : 23
    };

    var x = person.age;
    var y = person['age'];

    document.write(x); // 28
    document.write(y); // 28

    // JS built-in length property is used to count the number of characters in a property string
    document.write(person['name'].length); // 7
```

# creating objects using object constructor function
sometimes we need to set an "object type" that can be used to create a number of objects of a single type. this standard way to create an "object type" is to use an object constructor function.
```js
    // this function (person) is an object constructor, which takes parameters and assigns them to object properties
    // the this keyword refers to the current object
    // Note that this is not a variable. its a keyword, and its value cannot be changed
    function person(name, age, favColor, height) {
        this.name = name;
        this.age = age;
        this.favColor = favColor;
        this.height = height;
    };

    // once you have an object constructor, you can use the new keyword to create new objects of the same type
    // p1 and p2 are now objects of the person type. their properties are assigned to the corresponding value
    var p1 = new person("Rodgers", 28, "blue", 43);
    var p2 = new person("Harvey", 1, "green", 10);

    document.write(p1.age); // 28
    document.write(p2.age); // 1
```
# Object Methods
an __object method__ is a property that contains a function definition. use the following syntax to access an object method.
```js
    objectName.methodName();
```
* a __method__ is a function, belonging to an object. it can be referenced using __this__ keyword. the __this__ keyword is used as a reference to the current object meaning that you can access the objects properties and methods using it. defining methods is done inside the constructor function.
```js
    function persons(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    // we have defined a method changeFirstName for our person, which is a function that takes a parameter firstName and assigns to it the firstName property of the object.
    this.changeFirstName = function (firstName) {
        this.firstName = firstName;
    }
    };


    var p3 = new persons("Damaris", "Awuor", "11-11-1993");
    p3.changeFirstName("Oballa");

    document.write(p3.firstName); // Oballa
```
* you can also define the function outside of the constructor function and associate it with the object
```js
    function persons(firstName, lastName, age) {
    this.firstName  = firstName;
    this.lastName = lastName;
    this.age = age;
    this.yearOfBirth = bornYear;

    };
    // we've assigned the object's yearOfBirth property to the bornYear function
    // the this keyword is used to access the age property of the object which is going to call the method
    function bornYear() {
        return 2022 - this.age;
    };

    var p4 = new persons("Rodgers", "Nyangweso", 28);
    document.write(p4.yearOfBirth()); // 1994
```

# Core Objects 1: Arrays
* JS arrays store multiple values in a single variable. an __Array__ is a special type of __object__, it uses numbers to access its elements and an object uses name to access its members
# Ways of Creating Arrays
1. using new Array: 
```js
    var courses = new Array("HTML", "JavaScript", "CSS");
```
2.  you can also declear an array, tell it the number of elements it will store, and add thr elements later
```js
    var courses = new Array(3);
        courses[0] = "HTML";
        courses[1] = "CSS";
        courses[2] = "JS";
```
_Remark_:  _JS arrays are dynamic, so you can declear an array an array and not pass any arguments with the array() constructor. You can then add elements dynamically_
```js
     var courses = new Array();
        courses[0] = "HTML";
        courses[1] = "CSS";
        courses[2] = "JS";
        courses[3] = "c++"; 
```
3. using __Array literal__: _used for greater simplicity, readability, and execution speed,_
```js
    var courses = ["HTML", "CSS", "JavaScript"];
```
_Remarks_:
* _Remember that JS does not support arrays with named indexes. in JS, arrays always use numbered indexes. it is better to use an object when you want the to index to be a string(text).use an array when you want the index to be a number_
* _accessing Array elements_: you refer to an array element by refering to the index number written in square brackets.
    ```js
        var courses = new Array("HTML", "CSS", "JavaScript");
        // [0] is the first element in an array. [1] is the second element. array indexes start with 0
        document.write(courses[0]); // HTML

        // attempting to access an index outside of the array, returns the value undefined
        document.write(courses[4]); // undefined
    ```
* _changing Array elements_: example
    ```js
        var courses = new Array("HTML", "CSS", "JavaScript");
        // [0] is the first element in an array. [1] is the second element. array indexes start with 0

        document.write(courses[0]); // HTML

        courses[0] = ["C++"];
        document.write(courses[0]);  // C++
    ```
# Array Methods
1. __Length Property__ the length property of an array returns the length of an array(the number of array elements)
```js
    var courses = new Array("HTML", "CSS", "JavaScript");

    document.write(courses.length); // 3
    // if the array is empty, the length property returns 0
```

2. __concat() method__: allows you to join arrays and create an entirely new array
```js
    var languages = ["HTML", "CSS", "JavaSvript"];

    var javascriptFrameworks = ["React", "Aangular", "Vue"];

    var courses = languages.concat(javascriptFrameworks);

    document.write(courses); //  HTML,CSS,JavaSvript,React,Aangular,Vue
```
3. __map__: the __map() method__ creates a new array populated with the return value of the __callback__ function for each element in the array
```js
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(value => value * 2);
    console.log(doubled); // [ 2, 4, 6, 8, 10 ]
```
4. __forEach__: the __forEach()__ method executes a provided function once for each array element. the __callback function__ does not expect a return value, and the __forEach()__ method itself also returns undefined.
```js
    const numbers = [1, 2, 3, 4, 5];
    const allAboveThree = numbers.forEach(n => console.log(n)
); 
```
5. __filter__:the __filter()__ method creates a new array containing only the elements that '_pass the test_' implemented by the __callback function__. we call this type of callback a __predicate function__
```js
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.filter(n => n % 2 === 0);
    const odd = numbers.filter(n => n % 2 !== 0);
    console.log(even); // [2, 4]
    console.log(odd); // [1, 3, 5]
```
6. __find__: the __find()__ method behaves similarly to the __filter()__ method, but it only returns a single element. this method will stop at the first element that 'pass the test' and return that. if none exists, it will return undefined.
```js
    const numbers = [1, 2, 3, 4, 5];
    const even = numbers.find(n => n === 3);
    console.log(even);
```
7. __findIndex__: the __findIndex()__ method behaves similarly to the __find()__ method, but it returns an index instead of the element. this method will stop at the first element that 'pass the test' and return the index. if none exists, it will return -1
```js
    const numbers = [1, 2, 3, 4, 5];
    const indexOfThree = numbers.findIndex(n => n === 3);
    console.log(indexOfThree);
```
8. __reduce__: the __reduce()__ method takes a callback with (at least) two arguments, an __accumulator__ and the __current element__. for each iteration, the return value of the __callback function__ is passed on as the __accumulator argument__ of the next iteration.
```js
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, n) => acc + n);
    console.log(sum); // 15
```
9. __some__: the __some()__ function takes a __predicate function__ and return  true if any of the elemnts in the array 'passes the test'
```js
    const numbers = [1, 2, 3, 4, 5];
    const hasAboveThree = numbers.some(n => n > 3);
    console.log(hasAboveThree); // true
```
10. __every__: the __every()__ method takes a __predicate function__ and returns true if all of the elemnts in the array 'pass the test'
```js
    const numbers = [1, 2, 3, 4, 5];
    const allAboveThree = numbers.every(n => n > 3);
    console.log(allAboveThree); // false
```
11. __includes__: the __includes()__ method checks if an array includes a certain value among its elements, returning true or false
```js
    const numbers = [1, 2, 3, 4, 5];
    const hasNumberFour = numbers.includes(4);
    console.log(hasNumberFour);
```
12. __fill__: the __fill()__ method replaces all the elemnts in an array to a given value
```js
    const numbers = [1, 2, 3, 4, 5];
    const populateWithFour = numbers.fill(4);
    console.log(populateWithFour); 
```
13. __reverse__: the __reverse()__ method reverses the order of the elements in the array
```js
    const numbers = [1, 2, 3, 4, 5];
    const reversed = numbers.reverse();
    console.log(reversed);
```
14. __flat__: the __flat()__ method creates a new array with all sub-array elements flattened into it. you can specify a depth. The default is 1
```js
    const numbers = [[1], [2], [3], [4], [5]];
    const flattened = numbers.flat(2);
    console.log(flattened); // [ 1, 2, 3, 4, 5 ]
```
15. __flatMap__: the __flatMap()__ method applies a __callback__ to each element of the array and then flatten the result into an array. it combines __flat()__ and __map()__ in one function
```js
    const numbers = [[1], [2], [3], [4], [5]];
    const flattenedDoubles = numbers.flatMap((n) => n * 2);
    console.log(flattenedDoubles);
```
16. __sort__: the __sort()__ method is used to sort the elements of an array and returning the sorting array. _NOTE:_ this method is mutating the original array
```js
    const numbers = [2, 9, 3, 5, 1, 8];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
```
_Remarks_:
* Define the following array:
```js
    const companies = [
        {name : "Company One", category : "Finance", start : 1981, end : 2000 },
        {name : "Company Two", category : "Agriculture", start : 1982, end : 2001},
        {name : "Company Three", category : "Manfacturung", start : 1983, end : 2002},
        {name : "Company Four", category : "Technology", start : 1984, end : 2003},
        {name : "Company Five", category : "Retail", start : 1985, end : 2004},
        {name : "Company Six", category : "Auto", start : 1986, end  : 2005 },
        {name : "Company Seven", category : "Transport", start :1987, end : 2006 },
        {name : "Company Eight", category : "Finance", start : 1988, end : 2007 },
        {name : "Company Nine", category : "Hospitality", start : 1989, end : 2008},
        {name : "Company Ten", category : "NGO", start : 1990, end : 2009}
    ];
```
* _using forEach_
```js
    // forEach
    companies.forEach(function(company) {
        console.log(company);
        console.log(company.name);
    });
```


# Core Objects 2: Math Object
the __Math object__ allows you to perform mathematical tasks, and include several __properties__:
* E - Euler's constant
* LN2 - Natural log of the value 2
* LN10 - Natural log of the value 10
* LOG2E - the base 2log of Euler constant
* LOG10E - the base 10 log of Euler constant (E)
* PI - returns the constant pi
```js
    document.write(Math.PI); // 3.141592653589793
    document.write(Math.E); // 2.718281828459045
```

# Math Object Methods
The Math object cntains a number of methods that are used for calculations
* abs(x) - returns the absolute value of x
* acos(x) - returns the arccosine of x, in radians
* asin(x) - returns the arcsine of x, in radians
* atan(x) - returns the arctangent of x as a numeric value between  -PI/2 and PI/2 radians
* atan2(y, x) - returns the arctangent of the quotient of its arguments
* ceil(x) - returns x, rounded upwords to the nearest integer
* cos(x) - returns the cosine of x (x in radians)
* exp(x) - returns the value E**2
* floor(x) - returns x, rounded downwards to the nearest integer
* log(x) - returns the natural logarithm (base E) of x
* max(x, y, z, ..., n) - returns the number with the highest value
* min(x, y, z, ..., n) - returns the number with the lowest value
* pow(x, y) - returns the vaLUE OF X TO POWER Y
* random() - returns a random number between 0 and 1
* sin(x) - returns the sin of x (x in radians)
* sqrt(x) - returns the square root of x
* tan(x)- returns the tangen5t of an angle
```js
    var number = Math.random();
    document.write(number); // 0.061984262288161895
```
* create a program that asks a user to enter a number and computes its square root
```js
    var n = prompt("Enter a random number: ", " ");
    var answer = Math.sqrt(n);

    document.write("The Square root of " + n + " is " + answer); 
```

# Core Objects 2: Date Object
the __Date object__ enables us to work with dates
# Date Objects
1. __setInterval()__ method: calls a function or evaluates an expression at specified intervals (in milliseconds).
```js
    function myAlert () {
    alert('Hi');
    };
    setInterval(myAlert, 3000); // this will call myAlert function every 3 seconds (1000 ms = 1 second)
    myAlert(); 
```
2. __newDate()__: creates a new date object with current date and time. JS dates are calculated in milliseconds from __01 January, 1970 00:00:00 Universal Time(UTC)__. one day contains 86, 400, 000 milliseconds
```js
    var currentDate = new Date()
    document.write(currentDate); // Sun Feb 20 2022 21:15:59 GMT+0300 (East Africa Time)
```
_Remark_: _the other ways to initialize dates allow for the creation of new date objects from the specified date and time_
```js
    var d1 = new Date(86400000);
    document.write(d1); // Fri Jan 02 1970 03:00:00 GMT+0300 (East Africa Time)

    var d2 = new Date("January 2, 2015 10:42:00");
    document.write(d2); // Fri Jan 02 2015 10:42:00 GMT+0300 (East Africa Time)

    var d3 = new Date(88,5,11,11,42,0,0);
    document.write(d3); // Sat Jun 11 1988 11:42:00 GMT+0300 (East Africa Time)
```
_Remark_: _JS counts months from 0 to 11. Date objects are static , rather than dynamic. the computer time is ticking, but date objects dont'd change, once created_

# Date Methods
* getFullYear() - gets the year
* getMonth() - gets the month
* getDate() - gets the day of the month
* getHours() - gets the hour
* getMinutes() - gets the minutes
* getSeconds() - gets the seconds
* getsMillisecond() - gets the milliseconds
```js
    var d4 = new Date();

    var hours = d4.getHours();
    document.write(hours); // gets the hour
```
_Remarks_:
* create a program that prints the current time in the browser every second
    ```js
        function printTime(){
        // we declared a function printTime(), which gets the current time from the date object, and prints it to the screen once every second, using the setInterval method
        var d5 = new Date();
        var hours = d5.getHours();
        var mins = d5.getMinutes();
        var secs = d5.getSeconds();
        document.body.innerHTML = hours + ":" + mins + ":" + secs; 
    }
    setInterval(printTime, 1000);

    // the innerHTML property sets or returns the HTML content of the element.
        // in our case, we are changing the HTML content of our document's body.
        // this overwrites the content eery second, instead of printing it repeatedly to the screen
    ```
# JavaScript HTML DOM
When a web page is loaded, the browser creates a __Document Object Model__ of the page. With the object model, __JavaScript__ gets all the power it needs to create dynamic HTML:
* JavaScript can change all the HTML elements in the page
* JavaScript can change all the HTML attributes in the page
* JavaScript can change all the CSS styles in the page
* JavaScript can remove existing HTML elements and attributes
* JavaScript can add new HTML elements and attributes
* JavaScript can react to all existing HTML events in the page
* JavaScript can create new HTML events in the page

# The document Object
there are predefined document object in JS, which can be used to access all elements on the DOM. i.e., the document object is the owner (or root) of all objects in your page. so if you want to access objects in an HTML page, you always start with accessing the document object, _for example_:
```js
    document.body.innerHTML = "One, Two, Testing";
```
_Remarks:_
* _as the body is an element of the DOM, we can access it using the document object and change the content of the innerHTML property_
* _the innerHTML property can be used on almost all HTML elements to change its content_

# Selecting Elements
all __HTML elements__ are objects. and as we know, every object has __property__ and __methods__. the __document object__ has methods that allows you to select the desired HTML element. these _three methods_ are the most used for __selecting HTML elements__:
1. __finds element by id__:
    ```js
        document.getElementById('id')
    ```
2. __finds element by class name__
    ```js
        document.getElementByClassName('name')
    ```
3. __finds element by tag name__
    ```js
        document.getElementByTagName(name)
    ```
    _Remarks_:
    * _in the example below, getElementById method is used to select the element with id='demo' and change its content_
        ```js
            var elem = document.getElementById("demo");
            elem.innerHTML = "Rodgers Nyangweso";
        ```
    * _the __getElementByClassName()__ method returns a collection of all elements in the document with the specified name_. for example, if our HTML page contained three elements with class="demo2", the following  code would return all those elements as an array:
        ```js
            var arr = document.getElementByClassName("p");
            // accessing the second element
            arr[1].innerHTML = 'Hi';
        ```
    * _similarly, the __getElementByTagName__ method returns all of the elements of the specified tag name as an array_. the following example gets all paragraph elements of the page and changes their content.
        ```js
            var allParagraphs = document.getElementsByTagName("p");

            for (var x = 0; x < allParagraphs.length; x++) {
                allParagraphs[x].innerHTML = 'Hi there!'
            }
        ```

# Working with DOM
EACH element in the DOM has a set of properties that provide information about their relationships in the DOM:
* element __childNodes__ returns an array of an element child nodes
* element __firstChild__ returns the first child node of the element
* element __lastChild__ returns the last child node  of the element
* element __hasChildNodes__ returns true if an element has any child nodes. otherwise, false
* element __nextSibling__ returns the next node at the same tree level
* element __previousSibling__ returns the previous node at the same tree level
* element __parentNode__ returns the parent node of an element

_Remarks_:
* _example_: we can select all child nodes of an element and change their content.
```js
    var a = document.getElementById('demo2');
    var arr = a.childNodes; // selecting all the child nodes
    for (var x = 0; x<arr.length; x++) {
        arr[x].innerHTML = "new text";
    };
```

# Changing Attributes
once you have selected the element(s) you want to work with, you can change their attributes, we can change the text content of an element suing the innerHTML property. for example:
* _we can change the src attribute of an image_
    ```js
        var img = document.getElementById("my_img");
        img.src = "‪rodgers_image2.jpg";
    ```
* _we can change the href attribute of a link_
    ```js
        var el2 = document.getElementsByTagName('a');
        el2[0].href = "specify the url";
    ```

* _practically, all attributes of an element can be changed using JS_

# Changing Style
all the styles can also be changed using JS. all style attributes can be accessed using the style object of the element. __for example__:
```js
    var x = document.getElementById("style-demo");
    x.style.color = "#649272";
    x.style.width = "100px";
```
_Remarks_:
* _the above code will change the text color and width of the div element_
* _all CSS properties can be modified using JS. just remember that you cannot use dashes (-) in the property names: these are replaced with camelCase versions where the compound word begins with a capital letter_. for example
    ```js
        x.style.backgroundColor = "#33EA73";
    ```
# Adding and Removing Elements

# Creating Elements
using the following methods to create new nodes:
* __element.cloneNode()__ -  clones an element and returns the resulting node
* __document.createElement(element)__ - creates a new element node 
* __document.createTextNode(text)__ - creates a new text node

_Remarks_:
* for example:
    ```js
        var node = document.createTextNode("a new text node has been created successfully");
    ```
* _this will create a new text node, but it will not appear in the document until you apped it to an existing element with one of the following methods:_
    * __element.appendChild(newNode)__ - adds a new child node to an element as the last child node
    * __element.insertBefore(node1, node2)__ - inserts bode1 as a child before node2

# creating a new paragraph
```js
    var p = document.createElement("p"); 
    var node = document.createTextNode("Creating a text node");

    // adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("adding-nodes");
    // adding the paragraph to the div
    div.appendChild(p);
    // this creates a new paragraph and adds it to the existing div element on the page
```

# Removing Element
to remove an __HTML element__, you must select the parent of the element and use the __removeChild(node)__ method.
```js
    var parent = document.getElementById("remove-demo");
    var child = document.getElementById("p1");
    parent.removeChild(child); 
```

_Remark_:
* _an alternatie way to achieving the same result would be the use of the __parentNode__ property to get the parent of the element we want to remove._
    ```js
        var child = document.getElementById("p1");
        child.parentNode.removeChild(child);
    ```

# Replacing Elements
to replace an HTML element, the element __replaceChild(newNode, oldNode)__ method is used:
```js
    var p = document.createElement("p");
    var secondNode = document.createTextNode("This is a replaced text");
    p.appendChild(secondNode);

    var secondParent = document.getElementById("replace-demo");
    var secondChild = document.getElementById("p3");
    secondParent.replaceChild(p, secondChild);
```

# Creating Animations - Project
lets create a simple HTML page with a box element that will be animated using JS. to create an animation, we need to change the properties of an element at small intervals of the time. we can achieve this by using the __setInterval()__ method which allows us to create a btimer and call a function to change properties repeatedly at defined intervals (in milliseconds). _For Example_:
```js
    // this code creates a timer that calls a move() function every 500 miilliseconds
    var t = setInterval(move, 500);

    // now we need to define the move() function that changes the position of the box
    // starting position
    var pos = 0;

    // our box element
    var box = document.getElementById('box');

    function move() {
	pos += 1;
	box.style.left = pos+"px"; // px = pixels
    } // the move() function increments the left property of the box element by one each time its called

    // the following code defines a timer that calls the move() function every 10 milliseconds
    var t = setInterval(move, 10);

     /**
     however this makes our box moves to the right forever. 
     to stop the animation when the box reaches the end of the container, we add a simpl cheeck to the 
     move() function and use the clearInterval() method to stop the timer
    **/

    function move(){
        if (pos >=150) {
            clearInterval(t);
        }
        else {
            pos += 1;
            box.style.left = pos+"px";
        }
    } 
        //  when the left attribute of the box reaches the value of 150, the box reaches the end of the container based on a container width of 200 and a box width of 50
```

# Handling Events
you can write JS code that executes when an event occurs, such as when a user clicks an HTML element, move the mouse, or submits a form. when an event occurs on an a target element, a handler function is executed: Common HTML events include:
* __onclick__ - occurs when the user clicks on an element
* __onload__ - occurs when an object has loaded
* __onunload__ - occurs once a page has unloaded (for $<$ body $>$)
* __onchange__ - occurs when the content of a form element, the selection, or the checked state have changed. (for $<$ input $>$, $<$ keygen $>$, $<$ select $>$, and $ <
$ textarea $>$)
* __onmouseover__ - occurs when the pointer is moved onto an element, or out of one of its children
* __onmouseout__ - occurs when a user moves the mouse pointer out of an element, or out of one of its children
* __onmousedown__ - occurs when the user presses a mouse button over an element
* __onmouseup__ - occurs when a user releaees a mouse button over an element
* __onblur__ - occurs when an element loses focus
* __onfocus__ - occurs when an element gets focus

_Remarks_:
* _corresponding events can be added to HTML elements as attributes_. for example:
    ```html
        <p onclick="someFunc()">some text</p>
    ```
* _let's display an alert popup when a user clicks a specified button_
    ```js
        function show(){
            alert("Hi there");
        } 
    ```
* _the onload and onunload events are triggered when the user enters or leaves the page. these can be useful when performing actions after the page is loaded_
* _similarly, the window.onload event can be used to run code after the whole page is loaded_
    ```js
        window.onload = function() {
            // some code
        }
    ```
* _the __onchange__ event is mostly used on textboxes. the event handler gets called when the text inside the the text box changes and focus is lost from the element_. for example
    ```js
        function change(){
            var x = document.getElementById("name");
            x.value = x.value.toUpperCase();
        }
    ```
* _the __addEventListener()__ method attaches an event handler to an element without overwriting existing event handlers. you can add many event handlers to one element. you can also add many event handlers of the same type to one element, i.e., two "click" events_
    ```js
        element.addEventListener(event, function, useCapture);
    ```
* _the first parameter is the event's type (like 'click', or, 'mousedown'); the second parameter is the function we want to call when the event occurs; the third parameter is a Boolean value specifying whether to use event bubbling or event capturing. this parameter is optional_.
* _you don't use the 'on' prefix for this event; use 'click' instead of 'onclick'_. for example:
    ```js
        element.addEventListener("click", myFunction);
        element.addEventListener("mouseover", myFunction);
        function myFunction(){
            alert("hello world");
        } // this adds two event listeners to the element
    ```
* _we can remove one of the listeners_
    ```js
        element.removeEventListener("mouseover", myFunction);
    ```
* _let's create an event handler that removes itself after being executed:_
    ```js
        var btn = document.getElementById("event");
        btn.addEventListener("click", myFunction);
        function myFunction(){
            alert(Math.random());

            btn.removeEventListener("click", myFunction);
        }
        // after clicking the button, an alert with a random number displays and the event listener is removed
    ```
# Event Propagation
there are two ways of __event propagation__ in the HTML DOM: 
    * bubbling and 
    * capturing
_Remarks_
* _event propagation allows for the definition of the element order when an event occurs. if you have a $<$ p $>$ element inside a $<$ div $>$ element, and the user clicks on the $<$ p $>$ element, which element's 'click' event should be handled first?_
* _in __bubbling__, the innermost element's event is handled first and then the outer element's event is handled. the $<$ p $>$ element's click event is handled first, followed by the $<$ div $>$ element's click event._
* _in capturing, the outermost element's event is handled first and then the inner. the $<$ div $>$ element's click event is handled first, followed by the  $<$ p $>$ element's click event_
* _capturing goes down the DOM. bubbling goes up the DOM._

# Form Validation
HTML5 adds some attributes that allow form validation. for example, the required attribute can be added to an input field to make it mandatory to fill in. More complex form validation can be done using JS: _the form element has an onsubmit event that can be handled to perform validation._. for example:
```js
    // let's create a form with two inputs and one button 
    function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById("num2");

    if (n1.value != "" && n2.value != "") {
        if (n1.value == n2.value) {
        return true;
        }
    }
    alert("The values should be equal and not blank");
    return false;
    } // we return true when the values are not blank and are equal
    // the form will not get submitted if its onsub,it event returns false.
```


















# HTML DOM Document Object
The document object represents your web page. If you want to access any element in an HTML page, you always start with accessing the document object. 

# Finding HTML Elements (Methods)
Method | Description 
|:-------------:|:------------:|
document.getElementById(id) | Find an element by element id
document.getElementsByTagName(name) | Find elements by tag name
document.getElementsByClassName(name) | Find elements by class name

# Changing HTML Elements
Property | Description 
|:-------------:|:------------:|
element.innerHTML =  new html content | Change the inner HTML of an element
element.attribute = new value | Change the attribute value of an HTML element
element.style.property = new style | Change the style of an HTML element

Method | Description 
|:-------------:|:------------:|
element.setAttribute(attribute, value) | Change the attribute value of an HTML element

# Adding and Deleting Elements
Method | Description 
|:-------------:|:------------:|
document.createElement(element) | 	Create an HTML element
document.removeChild(element) | Remove an HTML element
document.appendChild(element) | Add an HTML element
document.replaceChild(new, old) | Replace an HTML element
document.write(text) | Write into the HTML output stream

# Adding Event Handlers
Method | Description 
|:-------------:|:------------:|
document.getElementById(id).onclick = function(){code} | Adding event handler code to an onclick event

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