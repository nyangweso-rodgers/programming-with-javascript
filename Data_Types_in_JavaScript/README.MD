# Data Types in JavaScript

## Table of Contents
- [Introduction to Data Types](#Introduction-to-Data-Types)
- [Data Types in JS](#Data-Types-in-JS)
    - [Number](#Number)
    - [String](#String)
    - [Boolean](#Boolean)
    - [null](#null)
    - [undefined](#undefined)
    - [object](#Object)

# Introduction to Data Types
A __variable__ in JS can contain any data type. a variable can at one moment be a __string__ and at another be a __number__. Programming languages that allow such things are called "__dynamically typed__", meaning that there are data types, but variables are not bound to any of them.

# Data Types in JS
# Number
represents both integer and floating point numbers
```js
    // Number
    let age = 56; // integer
    let height = 13.5; // float
```
_Remarks_:
* there are many operations for numbers, e.g., 
    - multiplication (*), 
    - division (/), 
    - addition (+), 
    - subtraction (-) and so on
* Besides regular numbers, there are so-called "_special numeric values_" which also belong to this data type
```js
    // special numeric values

    // Infinity - represents a number whose value is greater than any other number.  we can get as a result of division by zero
    console.log(5 / 0); // Output: Infinity

    // or just reference it directly
    console.log(Infinity); // Output: Infinity

    // -Infinity
    console.log(-Infinity); // -Infinity

    // NaN - represents a computational error. it is a result of an incorrect or undefined mathematical operation, for instance
    console.log("not a number" / 2); // Output: NaN
```
* __NaN__ is sticky and any operation on __NaN__ returns __NaN__. so if there is a __NaN__ somewhere in a mathematical expression, it propagates to the whole result
```js
    console.log("not a number" / 2 + 6); // Output: NaN
```
* __Mathematical Operations are safe__: _doing maths is 'safe' in javascript. we can do anything, divide by zero, treat non-numeric strings as numbers, e.t.c., the script will never stop with a fatal error ("die"). at worst, we'll get __NaN__ as a result_

# String
__String__: _double_ and _single quotes_ are "simple" quotes. there is no difference between them in javascript
```js
    // String
    let str = 'hello';
    let str1 = "double quotes are ok too";
    let phrase = `can embed ${str}`
    console.log(phrase); // Output: can embed hello

    // backsticks_ are "extended functionality" quotes, they allow us to embed variables and expressions into a string by wrapping them in ${...}, for example:
    let name = 'john';

    // embed a variable
    console.log(`hello, ${name}!`); // Output: hello, john

    // embed an expression
    console.log(`the result is ${1 + 2}`); // Output: the result is 3
```
# Boolean
__Boolean__ (logical type) has only two values: _true_ and _false_. this type is mostyly used to store yes/no values
```js
    let nameFieldChecked = true;
    let ageFieldChecked = false;

    // boolean values also comes as a result of comparison
    let isGreater = 4 > 1;
    console.log(isGreater); // Output: true
```

# null
the special __null__ value does not belong to any of the types described above. it forms a seperate type of its own which contains only the __null__ value:
```js
    let age = null;
```
_Remarks_:
* in JS, __null__ is not a reference to "__non-existing object__" or a "__null pointer__" like in othere some languages. it's just a special value that represents "__nothing__", "__empty__", or a "__value unknown__". 
* the code above states that the age is unknown or empty for some reasons 
# undefined
the special value "__undefined__" also stands apart. it makes a type of its own just like __null__. the meaning of "__undefined__" is "__value not assigned__". if a variable is _defined but not assigend_, then its value is "__undefined__"
```js
    let x;
    console.log(x); // shows undefined

    // Technically, it is possible to assign __undefined__ to any variable:
    // but it's not recommended to do that. normally, you should use null to assign an "empty" or "unknown" value to a variable. and we use "undefined" for checks like seeing if a variable has ben assigned.
    let y = 12346;
    y = undefined;
    console.log(y); // undefined
```
# Object
the __object__ type is special. all the other types are called "__primitive__" because their value can contain only a single thing(be it a __string__, a __number__ or whatever). in contrast, __objects__ are used to store collections of data and more complex entities. the symbol type is used to create a unique identifier for objects.
```js
    // Creating an Object in JS
    var emp = {
        name: "Rodgers",
        age: 26
    };

    console.log(emp); // Output: { name: 'Rodgers', age: 26 }
```