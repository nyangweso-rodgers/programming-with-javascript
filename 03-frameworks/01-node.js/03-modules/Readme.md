# Node.js Modules

## Table Of Contents

# Introduction to Node.js Modules

- Modules are a set of functions you want to include in your application.
- Node.js has a set of [built-in modules](https://www.w3schools.com/nodejs/ref_modules.asp) which you can use without any further installation.

# Difference Between CommonJS and ES Modules

- Synchronous vs. Asynchronous: CommonJS is a synchronous module system that is designed to work with Node.js's synchronous I/O model, whereas ES modules are asynchronous and allow for better performance in modern web applications.
- Syntax: CommonJS uses the `require()` function to load modules, while ES modules use the `import` statement.
- Exporting and Importing: CommonJS modules use the `module.exports` object to export values, while ES modules use the `export` keyword to export values

# Built-in vs. Local vs. Third-Party Modules in Node.js

- Three types of Node.js modules:

  1. built-in modules

     - These modules are available when you install Node.js. They include:
       - http: for creating HTTP(S) servers
       - url
       - path
       - fs
       - os
     - Core modules can be imported without specifying a path. These modules are accessible anywhere in your application. Example:

       ```js
       // import an fs code module
       const fs = require("fs");

       fs.readFile("index.txt", "utf8", (err, data) => {
         if (err) {
         }
         console.log(data);
       });
       ```

  2. local modules

     - When working with Node.js, you can create local modules which you can load and use in any program.

  3. third-party modules

     - `npm` makes it possible to share your modules.
     - Importing Third-Party Modules:

       - to use Third-Party modules, you have to install them using a package manager like `npm` or `yarn`.
       - Once installed, you can import and use them in your project.

         ```js
         // import third-party module
         const axios = require("axios");
         // logic goes here
         ```

# CommonJS vs. ES Modules (ESM) in Node.js

- For several years now, the Node.js ecosystem has been steadily shifting towards ES modules (ESM) as the preferred method for sharing and utilizing JavaScript code.
- While **CommonJS** has served the community well, **ESM** are rapidly gaining traction as they offer a standardized approach for creating JavaScript modules across all supported runtimes.

## 1. CommonJS Modules

- **CommonJS** emerged in 2009 as an early solution to tackle the challenges of organizing and reusing JavaScript code in non-browser contexts. It introduced a module system that allowed developers to split their code into separate files (modules) and provide a public API for other modules.
- The Node.js project quickly adopted **CommonJS** as its default module system. That decision proved pivotal in making JavaScript a viable language for large-scale application development on the server.
- The **CommonJS** module system is built on two fundamental concepts: defining modules with `module.exports` and importing modules with `require()`.

  1. Module Definition with `module.exports`

     - In **CommonJS**, each file is treated as a separate module with a special object called `module.exports`, which acts as the gateway for encapsulating and sharing functionality with other files in a project.
     - By default, none of the variables, functions, and classes defined in a module are accessible to other files unless you explicitly assign them to `modules.exports`:

       ```js
       // math.js
       function add(a, b) {
         return a + b;
       }

       function subtract(a, b) {
         return a - b;
       }

       module.exports = {
         add,
         subtract,
       };
       ```

  2. Importing Modules with `require()`

     - The `require()` function is used to access the exported functionality from other modules. It resolves a module using the provided argument, executes the code within it, and returns the `module.exports` object, giving you access to the module's public interface:

       ```js
       // app.js
       const math = require("./math");

       // Use the `add` function
       const sum = math.add(5, 3);
       console.log(`Sum: ${sum}`); // Output: Sum: 8

       const difference = math.subtract(5, 3);
       console.log(`Difference: ${difference}`); // Output: Difference: 2
       ```

- **Limitations of CommonJS**:

  - Despite its simplicity and flexibility, CommonJS has inherent drawbacks that have become more apparent as JavaScript has evolved:
    - **Not native to browsers**: **CommonJS** modules are not natively supported by web browsers. You'll need to use build tools to bundle your code and resolve module dependencies if you're writing Universal (Isomorphic) JavaScript.
    - **Synchronous loading**: Modules are loaded and executed one after the other in a blocking manner, which limits browser adoption.
    - **Limited static analysis**: The dynamic nature of `require()` makes it less efficient for tools to perform static analysis and optimizations like tree-shaking to remove unused code.

- **Remarks**:
  - While **CommonJS** played a crucial role in the early development of Node.js, the rise of **ES modules** in 2015 offered a more standardized and versatile approach to modularity. ESM gained stable support in Node.js 14 and is now the preferred choice for modern JavaScript development.

## 2. ES Modules

- **ES modules**, or **ECMAScript modules**, are the official and standardized way to work with modules in JavaScript. They address the limitations of earlier module systems and offer a more streamlined, performant, and future-proof approach to organizing and sharing code.

- Key advantages of **ES modules** over **CommonJS** include:

  - **Browser compatibility**: ES modules are supported directly by modern web browsers without the need for additional tools or bundling.
  - **Asynchronous loading**: ESM modules are loaded asynchronously, meaning they can be fetched and processed in parallel without blocking the main thread.
  - **Static analysis**: The import and export keywords provide a clear structure that allows tools to analyze your code statically. This enables optimizations like tree-shaking, where unused code can be eliminated, reducing the size of your final bundles.
  - **Modern syntax**: The syntax of ESM is more aligned with modern JavaScript practices. It is considered cleaner and more intuitive than the CommonJS syntax.

- ES Modules are built around two key concepts: defining modules with `export` and consuming them with `import`.

  1. Module Definition with `export`

     - Within an **ES module**, you can use the `export` keyword to designate which functions, classes, or variables are made available for use in other modules. You can have multiple named exports, a single default export, or both, providing flexibility in how you expose your module's functionality.

       ```js
       // math.mjs
       export function add(a, b) {
         return a + b;
       }

       export function subtract(a, b) {
         return a - b;
       }
       ```

  2. Module Consumption with `import`

     - In a different file, you can use `import` to selectively import only the specific things you need:

       ```js
       // app.mjs
       import { add } from "./math.mjs";

       const sum = add(5, 3);
       console.log(sum); // Output: 8
       ```

- **Remarks**:
  - **ES modules** have become the preferred way to write modular JavaScript, with Node.js actively embracing the standard (although CommonJS remains fully supported).

# Resources

1. [daily.dev - A Deep Dive Into CommonJS and ES Modules in Node.js](https://blog.appsignal.com/2024/12/11/a-deep-dive-into-commonjs-and-es-modules-in-nodejs.html?ref=dailydev)
2. [w3schools - Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
