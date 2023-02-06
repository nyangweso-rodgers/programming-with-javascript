# Functions

## Table Of Contents
1. [5 Ways to Define Functions in JS]()
    - [Function Expression]()
    - [Function Declaration]()
    - [Arrow Function]()
    - [Function Constructor]()
    - [IIEF Functions]()

- [Callback Functions]()
- [Recursive Functions]()

# Types of JS Functions
1. __eval() function__: You can get the result of a __string expression__ using the __eval() function__, which takes a string expression argument and returns the result. If the argument is empty, it returns __undefined__.
```js
    eval("10 * 20 + 8"); // 208
```
2. __document.write() function__: writes a _string_ to the __HTML__ document. This function can be used to write _text_, _HTML_, or Both. The __document.write()__ method should be used for testing.
```js
    document.write('This is a document dot write function');

    // Just like HTML, we can use HTML tags to format texts in JS. we can output the text as a heading
    document.write("Hello, world!");
    document.write("<h1>Using document dot write function to format texts</h1>")
```