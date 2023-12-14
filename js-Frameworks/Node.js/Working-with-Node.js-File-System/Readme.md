# Working with `Node.js` File System

## Table Of Contents

- [Resources]()
  1. [Reading and writing JSON files in Node.js: A complete tutorial](https://blog.logrocket.com/reading-writing-json-files-node-js-complete-tutorial/)

# Getting Started with this Project

- from the command line, create a `node-project` folder and navigate to the project
  ```sh
      # create a project
      mkdir Working-with-Node.js-File-System
      # navigate to the project
      cd Working-with-Node.js-File-System
  ```
- initialize the project
  ```sh
      # initialize the project
      npm init
  ```
- a new file, `package.json` is added to the project. we use this file to add modules to the project.
- add the following line before the closing curly brace to enable `ES6` import:
  ```json
      "type": "module"
  ```

# `fs` Module

- Each function exposed by the `fs` module has the **synchronous**, **callback**, and **promise**-based forms.

1. **Synchronous APIs**:

   - The names of all **synchronous** functions end with the "`Sync`" characters. E.g., `writeFileSync` and `readFileSync` are both synchronous functions.

     ```js
     const fs = require("fs");

     // blocks the event loop
     fs.readFileSync(path, options);
     ```

2. **Callback API**:

   - Unlike the **synchronous** methods that block the execution of the remaining code until the operation has succeeded or failed, the corresponding methods of the **callback API** are **asynchronous**. You’ll pass a callback function to the method as the last argument.
   - The **callback function** is invoked with an **Error** object as the first argument if an **error** occurs. The remainder of the arguments to the callback function depend on the `fs` method.
     ```js
     const fs = require("fs");
     fs.readFile(path, options, callback);
     ```

3. **Promised-based APIs**:

   - The promise-based API is asynchronous, like the callback API. It returns a **promise**, which you can manage via promise chaining or `async`/`await`.

     ```js
     const fs = require("fs");

     fs.readFile(path)
       .then((data) => {
         // do something with the data
       })
       .catch((err) => {
         // do something if an error occurrs
       });
     ```

- Remarks:
  - According to the Node documentation, the **callback API** of the built-in `fs` module is more performant than the **promise-based API**.

# Working with `JSON` Files

- The Node runtime environment has the built-in `fs` module specifically for working with files.

## Load a `JSON` file using `require` Module

- You can use the `require` function to synchronously load `JSON` files in Node. After loading a file using `require`, it is cached. Therefore, loading the file again using require will load the cached version. In a server environment, the file will be loaded again in the next server restart.
- It is therefore advisable to use `require` for loading static `JSON` files such as configuration files that do not change often. Do not use require if the `JSON` file you load keeps changing, because it will cache the loaded file and use the cached version if you require the same file again. Your latest changes will not be reflected.

## Read `JSON` File using the `fs.readFile` Method

```js
// app.js
import fs from "fs";
const path = "./my-files/config.json";

fs.readFile(path, (err, fileData) => {
  // check for any errors
  if (err) {
    console.error("Error while reading the file", err);
    return;
  }
  let jsonData;
  try {
    // output the parsed data
    jsonData = JSON.parse(fileData);

    console.log(jsonData);
  } catch (parseError) {
    console.error("Error while parsing JSON data", parseError);
  }
});
```

- `(err, fileData) => {}` is the callback function that runs after the file has been read.
- Before we can use the data from the callback in our code, we must turn it into an object. `JSON.parse()` takes `JSON` data as input and returns a new JavaScript object. Otherwise, we would just have a string of data with properties we can’t access.
- `JSON.parse `can throw exception errors and crash our program if passed an invalid `JSON` string. To prevent crashing we wrap `JSON.parse` in a `try` --- `catch` statement to gracefully catch any errors.

## Read `JSON` file Synchronously using `fs.readFileSync`

- Instead of taking a **callback**, `readFileSync` returns the file content after reading the file.
  ```js
  import fs from "fs";
  const path = "./my-files/config.json";
  let jsonData;
  try {
    const jsonStringFile = fs.readFileSync(path);
    const jsonData = JSON.parse(jsonStringFile);
    console.log(jsonData);
  } catch (e) {
    console.log(e);
  }
  ```
- **Remarks**:
  - we can create a re-usable helper function to read and parse a `JSON` file.
  - Here, we create a `jsonReader` function to read and parse a `JSON` file
  - It takes the path to the file and a **callback** to receive the parsed object and any errors.

## Write `JSON` Files in `Node.js`
