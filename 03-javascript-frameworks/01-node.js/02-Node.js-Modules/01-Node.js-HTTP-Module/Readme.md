# Node.js HTTP Module

## Table of Contents

# Introduction to HTTP

- HTTP is used to communicate between the web server and browser among other things.

# Introduction to Node.js HTTP Module

- Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
- Node.js HTTP module enables you to create web servers, handle HTTP requests and responses, and interact with web APIs

# Node.js as a Web Server

- The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
- We use `createServer()` method to create an HTTP server.
- - Step #1:

  ```js
  const http = require("http");

  // create a server
  const server = http.createServer((req, res) => {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  });

  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  }); //the server object listens on port 8080
  ```

- The listen method expect a port and on production it should be set automatically but in development we can choose to run this server on which port, in this case we will run it at port 3000
- save the file and run it by `node 01-server.js` and then open a browser and access [localhost:3000](localhost:3000)

# Add an HTTP Header

- If the response from the `HTTP` server is supposed to be displayed as `HTML`, you should include an `HTTP` header with the correct content type:

  ```js
  const http = require("http");

  // create a server
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  });

  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  }); //the server object listens on port 8080
  ```

- The first argument of the `res.writeHead()` method is the status code, `200` means that all is `OK`, the second argument is an object containing the response headers.

# Resources

1. [w3schools - Node.js HTTP Module](https://www.w3schools.com/nodejs/nodejs_http.asp)
