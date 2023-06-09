# Function Definition in JavaScript - Function Expression

* A __Function Expression__ is created when the execution reaches it and is usable only from that moment. 

# Function Expression
* __Function expressions__ load when the interpreter reaches that line of code. If it's called before then it leads to an error. Why? _because the Interpreter will only hoist variable declaration to the top but keeps assignment at the same line._ The function in __functin declaration__ can be accessed only after the function definition.

# Syntax

```js
    // Sytax
    var functionName = function() {
        // statement
    };
```