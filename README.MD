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
- [Variables in JavaScript](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Variables_in_JavaScript)
- [Data Types in JavaScript](#Data-Types-in-JavaScript)
    - [typeof operator](#typeof-operator)
    
- [Comparisons Operators](#Comparisons-Operators)
- [Operators in JavaScript](#Operators-in-JavaScript)
- [Types Conversion in JavaScript](#Types-Conversion-in-JavaScript)

- [Control Flow in JavaScript]()
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
- [Functional Programming in JavaScript]()

- [Recursion in JavaScript](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Recursion_in_JavaScript)
- [Objects Orinted Programming in JavaScript](https://github.com/nyangweso-rodgers/JavaScript_Projects/tree/main/Object_Oriented_Programming_in_JavaScript)
    - [Arrays]()
    - [Math Object]()
    - [Date Object]()
    
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