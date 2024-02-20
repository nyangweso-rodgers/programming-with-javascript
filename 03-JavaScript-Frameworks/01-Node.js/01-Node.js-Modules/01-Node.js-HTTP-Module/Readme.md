# Node.js HTTP Module

## Table of Contents

# Introduction to HTTP

- HTTP is used to communicate between the web server and browser among other things.

# Introduction to Node.js HTTP Module

- Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
- Node.js HTTP module enables you to create web servers, handle HTTP requests and responses, and interact with web APIs

## Example: Create a simple `HTTP` Server

- using `http` module to create a simple HTTP server
- Step #1:
  - create a `01-server.js` file and include `HTTP` module by using `require()` method
    ```js
    const http = require("http");
    ```
- Step #2:
  - create an `http` server by using `createServer()` method of the `http` object. The `HTTP` server created listens to server ports and gives a response back to the client.
    ```js
    // create a server
    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, world!");
    });
    ```
    - `createServer()` accepts a callback with two arguments: HTTP request `req` and response `res`.
    - Inside the callback function, you send an HTML string to the browser
- Step #3:

  - give the server a port by using the `server.listen()` method. You can use `3000`

    ```js
    // create a simple http server
    const http = require("http");

    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello, world!");
    });

    server.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    ```

  - The listen method expect a port and on production it should be set automatically but in development we can choose to run this server on which port, in this case we will run it at port 3000
  - save the file and run it by `node 01-server.js` and then open a browser and access [localhost:3000](localhost:3000)

# Resources

1. [w3schools - Node.js HTTP Module](https://www.w3schools.com/nodejs/nodejs_http.asp)
