# Variables in ES6

## Table Of Contents
- [Introduction to Variables in ES6](#Introduction-to-Variables-in-ES6)
- [Template Literals in ES6](#Template-Literals-in-ES6)

# Introduction to Variables in ES6
* in ES6, we have three ways of declaring variables. the type of the declaration used depends on the necessary scope. __Scope__ is the fundamental concept in all programming languages that defines the visibility of a variable.

    ```js
        var a = 10;
        const b = 'hello';
        let c = true;
    ```

* _unlike the __var__ keyword, which defines a variable globally, or locally to an entire function regardless of block scope, __let__ allows you to declare variables that are limited in scope to the block, statement, or expression in whcich they are used._

* __const__ _variable have the  same scope as variables declared using __let__. the difference is that __const__ variables are immutable - they are not allowed to be reassigned_

    ```js
        if (true) {
        let name = 'Rodgers';
        } 
        alert(name); // generates an error
        // in this case, the name variable is only accesible in the scope of the if statement because it was declared as let
    ```

# Template Literals in ES6
* __Template literals__ are a way to output variables in a string. prior to __ES6__ we had to break the string for example:
    ```js
        let name = 'David';
        let msg = 'welcome';
        msg = msg + ' ' + name + '!';
        console.log(msg); // Output: welcome David!
    ```
* __ES6__ intoduces a new way of outputting variable values in strings. the same code above can be written as:
    ```js
        let name = 'David';
        let msg = `welcome ${name}!`;
        console.log(msg); // Output: welcome David!
    ```
* _notice that tempalte literals are enclosed by the backtick (``) character instead of the double or single quotes. the ${expression} is a placeholder, and can include any expression, which will get evaluated and insered into the template literal_.for example:
    ```js
        let r = 8;
        let s = 34;
        let msg1 = `the sum is ${r + s}`;
        console.log(msg1);
    ```
* _to escape a backtick in a template literal, put a backlash\before the backtick_