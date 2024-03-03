# Building Web Applications with Node.js, Express and MongoDB

## Table Of Contents

# Setting Up Development Environment for Node.js, Express, MongoDB and Docker

## Step #1: Create Project Folder and Initilize it

```sh
  mkdir my-express-app
  cd my-express-app
```

- Initialize the project by running the following command:
  ```sh
    npm init -y
  ```
- This will generate `package.json` file with default settings.

## Step #2: Installing Dependencies

- Install necessary packages for the project, including `express`
  ```sh
    npm i express
  ```
- `express` is for building the web server

- Optional `dev-dependencies` (used for development purposes) include:
  ```sh
    #install dev-dependencies
    npm i nodemon morgan --save-dev
  ```
  - `nodemon`
  - `morgan`: provides requests details made. , it logs each request in the CLI. You will be able to see some information about the request.

## Step #3: Create an `server.js` file in the root directory

- Create a `server.js`, import `express` module and creat an express application object:

  ```js
  // server.js
  import express from "express";
  import morgan from "morgan";

  // create an express application object
  const app = express();

  app.use(morgan("dev"));

  // define routes
  app.get("/", (req, res) => {
    res.send("Hello World!"); //Sending back a text response
  });
  ```

- Define a `PORT` for the server:

  ```js
  // ...

  //create a port that the server is listening on
  const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  ```

- This step should result in the following:

  ```js
  // server.js
  import express from "express";

  // create an express application object
  const app = express();

  // define routes
  app.get("/", (req, res) => {
    res.send("Hello World!"); //Sending back a text response
  });

  //create a port that the server is listening on
  //const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000
  const PORT = 3000; // Choose an available port like 3000, 8000

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  ```

- **Remark**:

  - we can also use `portfinder` module to dynamically assign available ports in the `server.js` with the following code:

    ```js
    //server.js
    import express from "express";

    // create an express application object
    const app = express();

    // define routes
    app.get("/", (req, res) => {
      res.send("Hello World!"); //Sending back a text response
    });

    // Use portfinder to dynamically find an available port
    portfinder
      .getPortPromise()
      .then((port) => {
        // Set the port for the server to listen on
        const PORT = process.env.PORT || port;

        app.listen(PORT, () => {
          console.log(`Server listening on port: ${PORT}`);
        });
      })
      .catch((err) => {
        console.error("Error finding an available port:", err);
      });
    ```

## Step #4: Connect to MongoDB Atlas

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
- Add the following code to `server.js`

  ```js
  //server.js

  import mongoose, { mongo } from "mongoose";
  import dotenv from "dotenv";

  dotenv.config(); // Load environment variables from .env file

  //connect to MongoDB Atlas
  const MONGO_URI = process.env.MONGO_URI;

  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
  ```

- `server.js` file should have the following:

  ```js
  //server.js
  import express from "express";
  import mongoose, { mongo } from "mongoose";
  import dotenv from "dotenv";

  dotenv.config(); // Load environment variables from .env file

  //connect to MongoDB Atlas
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

## Step #5: Run the Application

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

## Step #6: Run the Application with Docker

- Create a `Dockerfile` with the following:

  ```Dockerfile
    FROM node:alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm","run", "dev"]
  ```

- Build a **Docker Image**

  - The correct syntax for the `docker build` command is:

    ```sh
      # docker build syntax
      docker build [OPTIONS] PATH
    ```

  - Asumming we're running the docker build command from the roote directory containing `Dockerfile` you should specify `.`

    ```sh
      # build a Docker image
      docker build -t my-express-app .
    ```

  - This command builds a **Docker Image** called `my-express-app`

- Run the **Docker Container**
  - After the image is built, you can run the **Docker Container** by:
    ```sh
      # run the docker Container
      docker run -p 3000:3000 my-express-app
    ```
  - If you want to specify a custom name for your container when running it with `docker run`, you can use the `--name` flag followed by the desired name.4
    ```sh
      # run the docker Container
      docker run --name my-express-app-container -p 3000:3000 my-express-app
    ```
- Access Express.js server:
  - Open a web browser and navigate to http://localhost:3000

# Resources

1. []()
