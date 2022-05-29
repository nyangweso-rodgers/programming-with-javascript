# Functional Programming in JavaScript
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