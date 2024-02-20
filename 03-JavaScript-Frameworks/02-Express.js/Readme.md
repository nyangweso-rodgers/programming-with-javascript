# Express.js

## Table Of Contents

# Introduction to Express.js

- Express is a framework for developing software that listens for and responds to HTTP requests over the internet. The requests come from clients (e.g., browsers) that can make a request via HTTP.

# Concepts of Express.js

- Five broad categories of Express.js include:
  - express(),
  - Application,
  - Request,
  - Response, and
  - Router

## Concept #1: `express()`

- The `express()` function is required to create an Express application.
- This is a top-level function included in the Express module at the time you download Express into the root folder of your project by issuing this command:
  ```sh
    npm i express --save
  ```
- The `--save` adds Express to the `package.json` file created during the `npm init`

## Concept #2: `app` Object

- The app object refers to your Express software itself

## Concept #3: The `req` Object

- The req object refers to the HTTP request and allows developers to examine the client request.
- With Express's built-in methods developers are able to gather information from requests related to protocol, URLs, cookies, paths, search queries, and much more.

## Concept #4: The `res` Object

- The `res` object refers to the HTTP response that your Express application sends when it gets a request from the client.

## Concept #5: The Router() Object

- The Router() object was released with Express Version 4 and allows developers to group route handlers by site sections and access these groups using a shared route-prefix.

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [dev.to - An Express Primer for Beginners](https://dev.to/vetswhocode/understanding-express-a-primer-for-beginners-3efo)
