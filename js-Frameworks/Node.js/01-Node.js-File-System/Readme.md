# Working with `Node.js` File System

## Table Of Contents

# Working with `JSON` Files with `Node.js`

## Interact with `JSON` Files using `fs` Module in `Node.js`

- `fs` Module is a native module with functions to watch, read, and write files.
- Because it’s a native module, we can require it in our code without installing it. Just call `const fs = require(‘fs’)`.
- The `fs` module gives us the option of **synchronous** or **asynchronous** versions of many of its functions. The **synchronous** versions block execution of other code until they are done accessing the filesystem. An `async` function will run without blocking other code.
- This **synchronous** behavior can be useful in some places, like at startup when reading a config file before any other code is run, but becomes a big issue when used in a webserver where all incoming requests would be blocked while a **synchronous** file read is running. For this reason, you generally want to use the async versions of `fs` functions in your code.
- To read and write files **asynchronously** with `fs` we use `fs.readFile` and `fs.writeFile`.

### Read a JSON file Asynchronously

- The simplest way to read a `JSON` file is to require it. Passing `require()` with the path to a `JSON` file will **synchronously** read and parse the data into a JavaScript object.

  ```js
  // Read the JSON file
  import customerJsonFile from "./01-example-customer.json" assert { type: "json" };
  console.log(customerJsonFile);
  ```

- But reading `JSON` files with `require` has its downsides. The file will only be read once; requiring it again returns the cached data from the first time `require` was run. This is fine for loading static data on startup (like `.config` data). But for reading a file that changes on disk, like our `customer.json` might, we need to manually read the file using the asynchronous `fs.readFile.`

## Read `.json` File using `fs.readFile`

- To load the data from `01-example-customer.json` file, we use `fs.readFile`, passing it the path to our file, an optional encoding type, and a callback to receive the file data.

  ```js
  // Read file

  import fs from "fs";

  const readJsonFile = (path) => {
    fs.readFile(path, (err, jsonStringFile) => {
      if (err) {
        console.log("Failed to read a file: ", err);
        return;
      }
      console.log(jsonStringFile);
    });
  };

  // file path
  const sampleFilePath = "./01-example-customer.json";

  readJsonFile(sampleFilePath);
  ```

- Running the above code, returns the following results:

  ```js
  // output: <Buffer 5b 0d 0a 20 20 7b 0d 0a 20 20 20 20 22 66 69 72 73 74 4e 61 6d 65 22 3a 20 22 52 6f 64 67 65 72 73 22 2c 0d 0a 20 20 20 20 22 6c 61 73 74 4e 61 6d 65 ... 24 more bytes>
  ```

  - The above output is the raw binary data of the file represented as a **Buffer** object. **Buffers** are used in `Node.js` to represent binary data, and what you're seeing is not the human-readable content of the `JSON` file.
  - If you want to see the actual content of the file as a `string`, you need to convert the **Buffer** to a `string`. You can do this using the `toString()` method.

    ```js
    // Read file

    import fs from "fs";

    const readJsonFile = (path) => {
      fs.readFile(path, (err, jsonStringFile) => {
        if (err) {
          console.log("Failed to read a file: ", err);
          return;
        }
        const jsonObject = JSON.parse(jsonStringFile);
        console.log(jsonObject);
      });
    };

    // file path
    const sampleFilePath = "./01-example-customer.json";

    readJsonFile(sampleFilePath); // Output: [ { firstName: 'Rodgers', lastName: 'Nyangweso' } ]
    ```

- we can get a specific value from a `json` key as follows:

  ```js
  // Read file

  import fs from "fs";

  const readJsonFile = (path) => {
    fs.readFile(path, (err, jsonStringFile) => {
      if (err) {
        console.log("Failed to read a file: ", err);
        return;
      }
      const jsonObject = JSON.parse(jsonStringFile);
      console.log("Customer First Name:", jsonObject[0].firstName);
    });
  };

  // file path
  const sampleFilePath = "./01-example-customer.json";

  readJsonFile(sampleFilePath); // Output: Customer First Name: Rodgers
  ```

# Remarks

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

# Resources

1. [Reading and writing JSON files in Node.js: A complete tutorial](https://blog.logrocket.com/reading-writing-json-files-node-js-complete-tutorial/)
