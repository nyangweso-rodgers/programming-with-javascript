# Variables in ES6

## Table Of Contents

# Introduction to Variables in ES6
* in ES6, we have three ways of declaring variables. the type of the declaration used depends on the necessary scope. __Scope__ is the fundamental concept in all programming languages that defines the visibility of a variable.

    ```js
        var a = 10;
        const b = 'hello';
        let c = true;
    ```

* _unlike the __var__ keyword, which defines a variable globally, or locally to an entire function regardless of block scope, __let__ allows you to declare variables that are limited in scope to the block, statement, or expression in whcich they are used._

* _const variable have the  same scope as variables declared using let. the difference is that const variables are immutable - they are not allowed to be reassigned_

    ```js
        if (true) {
        let name = 'Rodgers';
        } 
        alert(name); // generates an error
        // in this case, the name variable is only accesible in the scope of the if statement because it was declared as let
    ```