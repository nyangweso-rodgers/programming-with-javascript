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