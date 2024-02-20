# Node.js Modules

## Table Of Contents

# Introduction to Node.js Modules

- Modules are a set of functions you want to include in your application.
- Node.js has a set of [built-in modules](https://www.w3schools.com/nodejs/ref_modules.asp) which you can use without any further installation.

# Understanding CommonJS Module System

-
- Exporting Modules:

  - in Node.js, we can export values, functions or objects from a module using `module.exports` or `exports` object.
  - E.g.,

    ```js
    // helloWorld.js
    const helloWorld = () => {
      console.log("Hello world!");
    };

    module.exports = helloWorld;
    ```

- Importing modules
  - we use `require()` functions to import a module.
    ```js
    //
    const helloWorld = require("./helloWorld");
    helloWorld(); // Output: Hello, world!
    ```

# Understanding ES Module

- Update `package.json` file by adding `"type": "module"` to "tell" Node.js that all files are ES Modules.

# Difference Between CommonJS and ES Modules

- Synchronous vs. Asynchronous: CommonJS is a synchronous module system that is designed to work with Node.js's synchronous I/O model, whereas ES modules are asynchronous and allow for better performance in modern web applications.
- Syntax: CommonJS uses the `require()` function to load modules, while ES modules use the `import` statement.
- Exporting and Importing: CommonJS modules use the `module.exports` object to export values, while ES modules use the `export` keyword to export values

# Types Of Node.js Modules

- three types of Node.js modules:
  1. built-in modules
  2. local modules
  3. third-party modules

## Built-in Modules in Node.js

- These modules are available when you install Node.js. They include:
  - http: for creating HTTP(S) servers
  - url
  - path,
  - fs: used to handle file systems, and
  - os
- Importing Node.js core modules

  - Core modules can be imported without specifying a path. These modules are accessible anywhere in your application.
  - Example:

    ```js
    // import an fs code module
    const fs = require("fs");

    fs.readFile("index.txt", "utf8", (err, data) => {
      if (err) {
      }
      console.log(data);
    });
    ```

## Local Modules in Node.js

- When working with Node.js, you can create local modules which you can load and use in any program.

## Third-Party Modules

- `npm` makes it possible to share your modules.
- Importing Third-Party Modules:

  - to use Third-Party modules, you have to install them using a package manager like `npm` or `yarn`.
  - Once installed, you can import and use them in your project.

    ```js
    // import third-party module
    const axios = require("axios");
    // logic goes here
    ```

# Resources

1. [w3schools - Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
