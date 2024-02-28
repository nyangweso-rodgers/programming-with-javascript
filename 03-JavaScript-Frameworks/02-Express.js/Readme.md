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

- The `req` object refers to the HTTP request and allows developers to examine the client request.
- With Express's built-in methods developers are able to gather information from requests related to protocol, URLs, cookies, paths, search queries, and much more.

## Concept #4: The `res` Object

- The `res` object refers to the HTTP response that your Express application sends when it gets a request from the client.

## Concept #5: The Router() Object

- The Router() object was released with Express Version 4 and allows developers to group route handlers by site sections and access these groups using a shared route-prefix.

## Handling Requests with Express

- Handling requests with Express involves defining routes corresponding to a specific URL and HTTP method.Each route is associated with a callback function that gets executed when a matching request is received.
- Handling `POST` requests:

  ```js
  // server.js

  // handling post requests to the root URL
  app.post("/", (req, res) => {
    res.send("Received a POST request");
  });
  ```

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

# Sending Responses

- How express sends responses to the client?

## Sending HTML Responses

- we use `res.send()` method with an HTML string to send an HTML.
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

## Sending JSON Responses

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
- Alternatively, you can run this script by:
  ```sh
    node server.js
  ```
  - this will output: `Server listening on port: 3000` in the terminal.

## Step #5: Connecting to MongoDB using Mongoose

- Head to [MongoDB Atlas](https://account.mongodb.com/account/login) to create an account or sign in to an existing account.
- Create a `.env` file in the root directory and add the following:
  ```env
    MONGODB_URL=<Your MongoDB Connection String>
  ```
- Install `mongoose` and `dotenv`
  ```sh
    npm i mongoose dotenv
  ```
  - `dotenv` is for loading environment variables from a `.env` file.
  - `mongoose`: An ODM (Object Data Modeling) library for MongoDB.
- Add the following code to connect to mongodb using `mongoose`

  ```js
  import mongoose, { mongo } from "mongoose";
  import dotenv from "dotenv";

  dotenv.config(); // Load environment variables from .env file

  const MONGO_URI = process.env.MONGO_URI;

  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
  ```

- Final code should look like:

  ```js
  // server.js

  //const express = require("express");
  import express from "express";
  import mongoose from "mongoose";
  import dotenv from "dotenv";

  dotenv.config(); // Load environment variables from .env file

  const MONGO_URI = process.env.MONGO_URI;

  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

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

- now, running `npm run dev` or `node server.js` should output something like this:
  ```sh
    Server listening on port: 3000
    Connected to MongoDB
  ```

## Step #6: Define a Schema

- we can create a simple [schema](https://mongoosejs.com/docs/guide.html) by creating a `model` folder inside the `project_folder/` and add a file
  ```sh
    mkdir model
    cd model
    touch todo.js
  ```
- create `todo.js` file inside `project_folder/` with the following schema definition:

  ```js
  // todo schema
  import mongoose from "mongoose";
  //const mongoose = require("mongoose");
  const { Schema, model } = mongoose;

  const toDoSchema = new Schema(
    {
      created_by: {
        type: String,
        default: "Rodgers Nyangweso",
        immutable: true,
        required: true,
      },
      updated_by: {
        type: String,
        default: "Rodgers Nyangweso",
        immutable: false,
        required: true,
      },
      description: { type: String, required: true },
    },
    { timestamps: true }
  );

  toDoSchema.pre("save", function (next) {
    this.updated_at = Date.now(); // update the date every time a document is saved
  });

  // use the schema to create a model
  const ToDo = model("ToDo", toDoSchema);
  export default ToDo;
  ```

- import `todo.js` inside the `server.js` file as follows:
  ```js
  // server.js
  import ToDo from "./model/todo";
  ```

## Step #7: Implement CRUD Operations

- we start by creating `routes` for CRUD Operations

### Step #7.1: Create

- add the following code to the `server.js` file

  ```js
  // server.js

  //create a todo item
  app.post("todos/create", async (req, res) => {
    try {
      const newTodo = await ToDo.create(req.body);
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  ```

- here,
  - There’s an HTTP POST endpoint `/todos/create` for creating a new todo item.
  - When a POST request is made to `/todos/create`, the code inside the `async` function is executed.
  - It uses the `ToDo.create` method ([All methods for models](https://mongoosejs.com/docs/api/model.html)) to create a new todo item based on the data in the request body (req.body).
  - If the creation is successful, it responds with a status code `201` and sends the newly created todo item in JSON format as a response.
  - If there’s an error during the process, it catches the error and responds with a status code 500 and error message Internal Server Error.
- In simpler terms, this code handles requests to create a new todo item. It tries to create the item, and if successful, it responds with the created item. If there’s an issue during the process, it responds with an error message.

### Step #7.2: Read

- we replace the code of `app.get` to the following code in the `server.js` file:

  ```js
  // server.js

  // define routes
  app.get("todos/", async (req, res) => {
    try {
      const todos = await ToDo.find();
      res.status(200).json(todos);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  ```

- here:
  - There’s an HTTP GET endpoint `/todos` for getting the todo items.
  - When a GET request is made to /todos, the code inside the async function is executed.
  - It uses the `ToDo.find` method ([All methods for models](https://mongoosejs.com/docs/api/model.html)) to fetch all the todo items from the database.
  - If the fetching is successful, it responds with a status code 200 and sends all the todo items in JSON format as a response.
  - If there’s an error during the process, it catches the error and responds with a status code 500 and error message Internal Server Error.

### Step #7.3: Update

- we add the following lines of code to `server.js`

  ```js
  //server.js

  //update a todo by ID
  app.put("/todos/:id", async (req, res) => {
    try {
      const updatedToDo = await ToDo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedToDo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  ```

- here:
  - There’s an HTTP PUT endpoint `/todos/:id`, where `:id `is a placeholder for a specific todo item’s id.
  - When a PUT request is made, it tries to update a todo in the database with the specified ID (`req.params.id`) using the `ToDo.findByIdAndUpdate` method ([All methods for models](https://mongoosejs.com/docs/api/model.html)).
  - The new data for the todo is expected to be in the request body (`req.body`). This data is sent by the client making the PUT request.
  - The third argument { `new: true` } ensures that the method returns the updated todo after the update operation.
  - If the update is successful, it responds with a status 200 and sends the updated todo in JSON format in the response body.
  - If any error occurs during the update process (for example, if the specified ID is not found), it catches the error and responds with status 500 and error message Internal Server Error.

### Step #7.4: Delete

- update `server.js` file with the following lines of code:

  ```js
  // server.js

  //delete a todo by id
  app.delete("todos/:id", async (req, res) => {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      res.status(201).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  ```

- here:
  - There’s an HTTP DELETE endpoint `/todos/:id`, where :id is a placeholder for a specific todo item’s id.
  - When a DELETE request is made, it tries to delete a todo in the database with the specified ID (`req.params.id`) using the `ToDo.findByIdAndDelete` method ([All methods for models](https://mongoosejs.com/docs/api/model.html)).
  - If the deletion is successful, it responds with a status 204(No Content).
  - If any error occurs during the deleting process (for example, if the specified ID is not found), it catches the error and responds with status 500 and error message Internal Server Error.

## Step #8: Testing API

- Now, before testing our API, we need to add the following line of code to our `server.js` file, because we will read the data in JSON format.
  ```js
  //server.js
  //middleware provided by Express to parse incoming JSON requests.
  app.use(express.json());
  ```
- Finally, the `server.js` file should look like this:

  ```js
  // server.js

  //const express = require("express");
  import express from "express";
  import mongoose from "mongoose";
  import dotenv from "dotenv";
  import ToDo from "./model/todo.js";

  dotenv.config(); // Load environment variables from .env file

  const MONGO_URI = process.env.MONGO_URI;

  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

  // create an express application object
  const app = express();

  //middleware provided by Express to parse incoming JSON requests.
  app.use(express.json());

  // create a PORT that the server is listening on
  const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

  //create a todo item
  app.post("todos/create", async (req, res) => {
    try {
      const newTodo = await ToDo.create(req.body);
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // read a todo
  app.get("todos/", async (req, res) => {
    try {
      const todos = await ToDo.find();
      res.status(200).json(todos);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //update a todo by ID
  app.put("/todos/:id", async (req, res) => {
    try {
      const updatedToDo = await ToDo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedToDo);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  //delete a todo by id
  app.delete("todos/:id", async (req, res) => {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      res.status(201).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  ```

- we can use POSTMAN for testing purposes

### Step #8.1: Create a new todo item using a POST request

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [dev.to - An Express Primer for Beginners](https://dev.to/vetswhocode/understanding-express-a-primer-for-beginners-3efo)
3. [mongoose.com - Schemas](https://mongoosejs.com/docs/guide.html)
