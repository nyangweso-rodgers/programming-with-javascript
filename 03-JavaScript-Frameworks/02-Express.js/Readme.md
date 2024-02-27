# Express.js

## Table Of Contents

# Introduction to Express.js

- Express is a Node.js framework for developing software that listens for and responds to HTTP requests over the internet. The requests come from clients (e.g., browsers) that can make a request via HTTP.

# From `HTTP` Module in Node.js to Express.js

- Node.js has a built-in module, `HTTP`, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
  ```js
  // http server
  ```
- we use Express.js to re-write the above code as follows (we avoid writing repetitive code):

  ```js
  // server.js

  const express = require("express");

  // create an express application object
  const app = express();

  // rest of code goes here
  ```

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

# Setting Up a Express.js App

## Step #1: Create a Project Folder and Initilize it

```sh
  mkdir project_folder
  cd project_folder
```

- Initialize the project by running the following command:
  ```sh
    npm init -y
  ```
- This will generate `package.json` file with default settings.

## Step #2: Installing Dependencies

- Install necessary packages for the project, including `express`, `nodemon`, `mongoose`, and `dotenv`
  ```sh
    npm i express nodemon mongoose dotenv
  ```
- `express` is for building the web server
- `mongoose`: An ODM (Object Data Modeling) library for MongoDB.
- `dotenv`: For loading environment variables from a .env file.
- we are using `nodemon` for development, because when our app is deployed, `nodemon` does not have to be installed on any server where we will run our application.
  ```sh
    npm i nodemon --save--dev
  ```

## Step #3: Create an `server.js` file in the root directory

- Create a `server.js` and add the following code:

  ```js
  // server.js

  const express = require("express");

  // create an express application object
  const app = express();

  // create a PORT that the server is listening on
  const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

  // define routes
  app.get("/", (req, res) => {
    res.send("Hello World!"); //Sending back a text response
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  ```

- This is a code from [express.com - hello-world](https://expressjs.com/en/starter/hello-world.html)
- We first, specify a [HTTP method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods?retiredLocale=de),`GET` is the default one used to open web pages, hence `app.get(...)`.
  - The first argument is the path. We're specifying `/` as it is the home page opened. This could be anything like `/my-page` or more complicated paths.
  - The second argument is a **callback function**. This function is executed once somebody requests this web page/route. There are two arguments for this callback function, `req` with request information from the visitor and `res` with the response information that you send back. In this case, we're sending back (`res.send(...);`) the text "`Hello World!`". This could contain all sorts of stuff - from images to HTML.

## Step #4: Run the application

- Modify the generated `package.json` file with the following:
  ```json
    "scripts": {"start": "node server.js", "dev": "nodemon server.js"}
  ```
- This step accomplishes two things:
  - it allows `nodemon` to automatically restart the server whenever you make changes to your server side code
  - we no longer have to use the command "`node server.js`" to start the server. The server can now be started with the command "`npm start`".
- In the terminal, execute:
  ```sh
    npm run dev
  ```
  - this will run the dev script and print "Listening on port 3000" in the terminal implying that the server is running.
- Open up your browser and go to http://localhost:3000 where youll see "Cannot GET /". This means that the server is running but we have not defined a "get" route for "/".

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [dev.to - An Express Primer for Beginners](https://dev.to/vetswhocode/understanding-express-a-primer-for-beginners-3efo)
