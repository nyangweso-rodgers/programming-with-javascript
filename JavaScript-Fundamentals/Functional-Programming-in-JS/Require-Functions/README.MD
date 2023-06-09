# Require Functions

# What is the JavaScript require() Function?
* The __require()__ function is a built-in CommonJS module function supported in Node.js that lets you include modules within your project. This is because, by default, Node.js treats JavaScript code as CommonJS modules.

# How to Use the require() Function in JS
# Syntax
```js
    var varName = require(localName);
```

# require() vs import() Functions
* The require() function can be called from anywhere within the program, whereas import() cannot be called conditionally. It always runs at the beginning of the file.

* To include a module with the require() function, that module must be saved with a .js extension instead of .mjs when the import() statement is used.