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
  - express(),
  - Application,
  - Request,
  - Response, and
  - Router

## Routing in Express.js

### Routing Methods

- `app.get()` to handle `GET` requests
- `app.post` to handle `POST` requests
- You can also use the `app.all()` to handle all `HTTP` methods
- `app.use()` to specify middleware as the callback function.

### Routing Paths

- A **routing path** is a combination of a request method to define the endpoints at which requests can be made by a client.
- **Route paths** can be `strings`, `string patterns`, or `regular expressions`.
- Example:

  - Define endpoints for a server based application

    ```js
    //server.js
    import express from "express";
    const app = express();

    //home route
    app.get("/home", (req, res) => {
      res.send("<h1>Home Page</h1>");
    });
    //about route
    app.get("/about", (req, res) => {
      res.send("<h1>About Page</h1>");
    });
    ```

## Express Concept #1: `express()`

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

- The Router() object was released with Express Version 4 and allows developers to group route handlers by site sections and access these groups using a shared route-prefix.

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

# Setting Up a Express.js App

## Step #1: Create a Project Folder and Initilize it

```sh
  mkdir express-app
  cd express-app
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

## Step #4.1: Run the Application using Docker

- When working with Express.js and Docker, we don't need to `pull` an "express" image specifically from [Docker Hub](https://hub.docker.com/), as Express.js is a Node.js framework for building web applications, and it's typically used within a Node.js environment.
- Instead of pulling a specific "express" image, you typically create your own Docker image for your Express.js application. This Docker image is based on an existing Node.js image, which includes Node.js runtime and npm. You then add your application code, including your Express.js server setup, as well as any dependencies required by your application.
- Create a `Dockerfile` with the following:

  ```Dockerfile
    FROM node:alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ['node', 'server.js']
  ```

  - `FROM node:alpine` is a `Dockerfile` instruction that specifies the base image for building Docker image. In this case, it indicates that you're using the official Node.js Docker image with the Alpine Linux distribution as its base.
    - By using `node:alpine` as the base image, you get a minimal Node.js environment, which is suitable for running Node.js applications like Express.js servers in Docker containers. It includes Node.js itself and a few essential tools and libraries, but it's designed to be lightweight, which helps keep your Docker images small and efficient.
  - The line `WORKDIR /app` in a `Dockerfile` sets the working directory for any subsequent instructions in the `Dockerfile`. In this case, `WORKDIR /app` is setting the working directory inside the Docker container to `/app`. This means that when you later use commands like `COPY`, `RUN`, or `CMD` in your `Dockerfile`, they will be executed relative to the `/app` directory within the container.
    - Setting a working directory is helpful for organizing a `Dockerfile` and ensuring that commands operate in the correct context within the container. In many cases, you'll see `/app` used as the working directory because it's a common convention for storing application code within Docker containers. However, you can choose any directory structure that makes sense for your specific application.
  - It then copies the `package.json` and `package-lock.json` files, installs the dependencies, copies the rest of the application files.
  - The `RUN npm install` command is used to install Node.js dependencies for your project within the Docker image.
  - The `CMD ['node', 'server.js']` instruction in a Dockerfile specifies the default command that should be executed when a container based on the Docker image is launched.

- Remark:

  - When using `nodemon` then, the `CMD` instruction in your `Dockerfile` would typically change to `CMD ["npm", "run", "dev"]`
  - This tells Docker to run the `npm run dev` command inside the container, which starts your server using `nodemon`.

- Build a **Docker Image**

  - The correct syntax for the `docker build` command is:
    ```sh
      # docker build syntax
      docker build [OPTIONS] PATH
    ```
  - `[OPTIONS]` are any additional options you want to pass to the build process.
  - `PATH` is the path to the directory containing the Dockerfile and other files required for the build.
  - Asumming we're running the docker build command from the roote directory containing `Dockerfile` you should specify `.`
    ```sh
      # build a Docker image
      docker build -t test-express-server .
    ```
  - This command builds a **Docker Image** called `express-server`

- Run the **Docker Container**
  - After the image is built, you can run the **Docker Container** by:
    ```sh
      # run the docker Container
      docker run -p 3000:3000 test-express-server
    ```
  - When you run a Docker container without specifying a name using the `docker run` command, Docker automatically assigns a random, unique name to the container.
  - If you want to specify a custom name for your container when running it with `docker run`, you can use the `--name` flag followed by the desired name.4
    ```sh
      # run the docker Container
      docker run --name my-container -p 3000:3000 test-express-server
    ```
  - This command runs your Docker container with the name "my-container". Specifying a custom name can be helpful for easier identification and management of containers, especially when working with multiple containers.
  - After the completion of this process, a docker image will be created. To see all your docker images, run the following command in your terminal
    ```sh
        docker images
    ```
- Access Express.js server:
  - Open a web browser and navigate to http://localhost:3000

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
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
    { timestamps: true }
  );

  // use the schema to create a model
  const ToDo = model("ToDo", toDoSchema);
  export default ToDo;
  ```

- import `todo.js` inside the `server.js` file as follows:
  ```js
  // server.js
  import ToDo from "./model/todo";
  ```

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [dev.to - An Express Primer for Beginners](https://dev.to/vetswhocode/understanding-express-a-primer-for-beginners-3efo)
3. [mongoose.com - Schemas](https://mongoosejs.com/docs/guide.html)
