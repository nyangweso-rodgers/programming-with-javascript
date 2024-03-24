# Express.js

## Table Of Contents

# From `HTTP` Module in Node.js to Express.js

- Node.js has a built-in module, `HTTP`, which allows Node.js to transfer data over the HTTP.

  ```js
  // http server
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

- we use Express.js to re-write the above code as follows (we avoid writing repetitive code):

  ```js
  //server.js
  import express from "express";
  import morgan from "morgan";

  const app = express();

  app.use(morgan("dev"));

  app.use("/", (req, res) => {
    res.send("<h1>Welcome to the world of Express.js</h1>");
  });

  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  ```

# Introduction to Express.js

- **Express** is a **Node.js** framework for developing software that listens for and responds to `HTTP` requests over the internet. The requests come from clients (e.g., browsers) that can make a request via `HTTP`.

## Pros of Express.js

1. Built-in route
2. Includes various middleware modules which you can use to perform additional tasks on `request` and `response`.

# Concepts of Express.js

- Five broad categories of Express.js include:
  - `express()`,
  - Application,
  - Request,
  - Response, and
  - Router

# Express Concept #1: `express()`

- The `express()` function is required to create an Express application.
- This is a top-level function included in the Express module at the time you download Express into the root folder of your project by issuing this command:
  ```sh
    npm i express --save
  ```
- The `--save` adds Express to the `package.json` file created during the `npm init`

## Express Concept #2: `app` Object

- The app object refers to your Express software itself

## Express Concept #3: `req` Object

- The `req` object refers to the `HTTP` request used to examine the client request.
- With Express's built-in methods developers are able to gather information from requests related to protocol, URLs, cookies, paths, search queries, and much more.

### How to Handling Requests with Express

- Handling requests with Express involves defining routes corresponding to a specific `URL` and `HTTP` method.Each route is associated with a callback function that gets executed when a matching request is received.
- Handling `POST` requests:

  ```js
  // server.js

  // handling post requests to the root URL
  app.post("/", (req, res) => {
    res.send("Received a POST request");
  });
  ```

## Express Concept #4: `res` Object

- The `res` object refers to the `HTTP` response that an Express application sends when it gets a request from the client.

### Sending `HTML` Responses

- we use `res.send()` method with an `HTML` string to send an `HTML`.
- Example:

  ```js
  //server.js
  import express from "express";

  // create an express application object
  const app = express();

  // Handling a GET request to the root URL
  app.get("/", (req, res) => {
    res.send("<h1>Hello, Express!</h1>");
  });

  // Handling a POST request to the root URL
  app.post("/", (req, res) => {
    res.send("Received a POST request");
  });

  // create a PORT that the server is listening on
  const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

  // Start the server and listen on port 3000
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  ```

- Here,the `GET` route now sends an HTML response using `res.send('<h1>Hello, Express!</h1>')`. If you make a GET request, you'll receive HTML content as the response.

### Sending JSON Responses

- JSON responses are common when building APIs.
- Example:

  ```js
  //server.js

  // ...

  //handling a get request to 'api/data'
  app.get("/api/data", (req, res) => {
    const jsonData = { message: "This is JSON data" };
    res.json(jsonData);
  });

  // ...
  ```

- Now, if you make a GET request to `'/api/data'`, the server responds with JSON data:
  ```json
  { "message": "Sample JSON data" }
  ```

## Express Concept #5: Router() Object

- The `Router()` object was released with Express Version 4 and allows developers to group route handlers by site sections and access these groups using a shared route-prefix.

## Concept #: Middleware

- Middleware functions allows us to execute code in the request-response cycle. Middleware functions have access to the request (`req`) and response (`res`) objects, and they can modify these objects, end the request-response cycle, or call the next middleware function.

  ```js
  // server.js

  //middleware function to log requests information
  const logMiddleware = (req, res, next) => {
    console.log(`Request a ${req.method} request to ${req.path}`);
    next(); // Call the next middleware in the stack
  };

  // Use the middleware for all routes
  app.use(logMiddleware);
  ```

- Here, `app.use(logMiddleware)` applies the `logMiddleware` to all routes. The middleware function logs information about the incoming request, and `next()` ensures that the request continues to the next middleware or route handler in the stack.

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [dev.to - An Express Primer for Beginners](https://dev.to/vetswhocode/understanding-express-a-primer-for-beginners-3efo)
