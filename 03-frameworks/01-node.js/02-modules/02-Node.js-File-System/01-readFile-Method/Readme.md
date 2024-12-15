# `readFile()` Method of `fs` Node.js Module

# Read Files

- The `fs.readFile()` method is used to read files on your computer.

# Project

- Step #1: Create an `index.html` File
- Step #2: Create `server.js` File

  - The `server.js` file should read the HTML file and return its content.

    ```js
    // server.js

    import fs from "fs";
    import http from "http";

    const server = http.createServer((req, res) => {
      fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    });
    const port = 8080;
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    ```

  - `const server = http.createServer((req, res) => {});` creates an `HTTP` server using the `http.createServer()` method.
    - it takes a callback function as an argument. This callback function will be executed every time a request is made to the server. The callback function takes two arguments: `req` (the request object) and `res` (the response object).
  - `fs.readFile('index.html', (err, data) => {});`

    - Inside the callback function, it uses the `fs.readFile()` method to read the contents of the `index.html` file asynchronously. This method takes two arguments: the path to the file to be read (`"index.html"` in this case) and a callback function that will be called once the file is read or if an error occurs during reading.

  - we can also use an `if..else` statement to rewrite the function and to check if there's an error while reading the file.

    ```js
    // server.js

    import fs from "fs";
    import http from "http";

    const port = 8080;

    const server = http.createServer((req, res) => {
      fs.readFile("index.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    });

    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    ```

  - here,

    - If there's an error, it sends a `500` Internal Server Error response.
    - If the file is read successfully, it sends a `200` OK response along with the contents of index.html.

  - we can go further and modify `server.js` code to first check the existence of `index.html` before trying to read it and send a 404 error if it's not found:

    ```js
    // server.js

    import fs from "fs";
    import http from "http";

    const port = 8080;

    const server = http.createServer((req, res) => {
      // check if index.html exists
      fs.access("index.html", fs.constants.F_OK, (err) => {
        if (err) {
          // file not found, send 404 error message
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("File not found");
        } else {
          // file exists, read and serve it
          fs.readFile("index.html", (err, data) => {
            if (err) {
              // internal server error
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Internal Server Error");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data);
              res.end();
            }
          });
        }
      });
    });

    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    ```

- Explanation:
  - We use the `fs.access` method with the `fs.constants.F_OK` flag to check if the file exists.
  - If `err` is `null`, the file exists, and we proceed to read it using `fs.readFile`.
  - If `err` is not `null`, the file doesn't exist, so we send a `404` error response.
- This enhanced code checks for the file's existence before trying to read it, providing a more informative error message for missing files.

- Suppose we need to serve `style.css` file within the same directory:

  ```js
  // server.js

  import fs from "fs";
  import http from "http";
  //import path from "path";

  const port = 8080;

  const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
      // check if index.html exists and serve it
      fs.access("index.html", fs.constants.F_OK, (err) => {
        if (err) {
          // file not found, send 404 error message
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("File not found");
        } else {
          // file exists, read and serve it
          fs.readFile("index.html", (err, data) => {
            if (err) {
              // internal server error
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Internal Server Error");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data);
              res.end();
            }
          });
        }
      });
    } else if (url === "/style.css") {
      // check if style.css exists and serve it
      fs.access("style.css", fs.constants.F_OK, (err) => {
        if (err) {
          // file not found, send 404 error message
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("File not found");
        } else {
          fs.readFile("style.css", (err, data) => {
            if (err) {
              // Internal server error
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Internal Server Error");
            } else {
              res.writeHead(200, { "Content-Type": "text/css" });
              res.write(data);
              res.end();
            }
          });
        }
      });
    } else {
      // Handle other potential requests for different files
      // ...
    }
  });

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  ```

- Explanation:
  - This code checks for either `index.html `or `style.css` based on the `req.url`.
  - It uses `fs.access` and `fs.readFile` to check for file existence and serve them with appropriate content types.
- Remark:
  - This approach requires manually checking for each file you want to serve.

# Conclusion

- The need to manually check for and handle each file in a web server was one of the driving forces behind the creation of **Express.js**. As **Node.js** gained popularity, developers quickly realized the limitations of manually managing **file serving**, **routing**, and other web application functionalities. Here's a breakdown of how manual checking led to Express.js:

- Limitations of Manual Checking:

  - **Repetitive code**: Manually checking for each file leads to code duplication and reduces maintainability.
  - **Scalability issues**: Handling complex **routing**, dynamic content, and various file types becomes cumbersome with manual checks.
  - **Error-prone**: Manually managing all aspects of a web server increases the risk of errors and inconsistencies.

- Benefits of Express.js

  - **Abstraction**: Express.js provides abstractions for common web server tasks like routing, middleware, and templating, simplifying development.
  - **Structure and organization**: It offers a structured approach to build web applications, promoting cleaner code and easier maintenance.
  - **Features and plugins**: A rich ecosystem of features and plugins extends Express.js capabilities for various functionalities.

- By addressing the limitations of manual file checking, Express.js empowers developers to create more efficient, scalable, and maintainable web applications in Node.js.

# Resources

1. [w3schools - Node.js File System Module](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
