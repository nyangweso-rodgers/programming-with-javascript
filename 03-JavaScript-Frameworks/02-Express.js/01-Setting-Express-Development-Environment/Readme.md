# Setting Up Development Environment for Web Application with Express, Node.js and MongoDB

## Table Of Contents

# Setting Up Development Environment for Node.js, Express, MongoDB Atlas and Docker

## Prerequisites

- Head to [MongoDB Atlas](https://account.mongodb.com/account/login) to create an account or sign in to an existing account.

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

## Step #2: Install Dependencies

- Install necessary packages for the project, including `express`

  ```sh
    npm i express mongoose dotenv
  ```

  - `express` is for building the web server
  - `dotenv` is for loading environment variables from a `.env` file.
  - `mongoose`: An ODM (Object Data Modeling) library for MongoDB.

- Optional `dev-dependencies` (used for development purposes) include:
  ```sh
    #install dev-dependencies
    npm i nodemon morgan --save-dev
  ```
  - `nodemon`
  - `morgan`: provides requests details made. , it logs each request in the CLI. You will be able to see some information about the request.

## Step #3: Create an `server.js` file in the root directory

- Create a `server.js` or `app.js`, import `express` module and creat an express application object:

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

## Step #4: Connect to MongoDB Atlas

- Create a `.env` file in the root directory and add the following:
  ```env
    MONGODB_URL=<Your MongoDB Connection String>
  ```
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

## Step #5: Define the Application Schema

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

## Step #6: Run the Application

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

## Step #7: Run the Application with Docker

- When working with `Express.js` and **Docker**, we don't need to `pull` an "express" image specifically from [Docker Hub](https://hub.docker.com/), as `Express.js` is a Node.js framework for building web applications, and it's typically used within a `Node.js` environment.
- Instead of pulling a specific "express" image, you typically create your own **Docker image** for your `Express.js` application. This Docker image is based on an existing Node.js image, which includes Node.js runtime and `npm`. You then add your application code, including your Express.js server setup, as well as any dependencies required by your application.

## Step #7.1: Create `Dockerfile`

- Create a `Dockerfile` with the following:

  ```Dockerfile
    FROM node:alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    #CMD ["npm","run", "dev"]
    CMD ['node', 'server.js']
  ```

- `FROM node:alpine` is a `Dockerfile` instruction that specifies the base image for building **Docker image**. In this case, it indicates that you're using the official Node.js Docker image with the Alpine Linux distribution as its base.
- By using `node:alpine` as the base image, you get a minimal Node.js environment, which is suitable for running Node.js applications like Express.js servers in Docker containers. It includes Node.js itself and a few essential tools and libraries, but it's designed to be lightweight, which helps keep your Docker images small and efficient.
- The line `WORKDIR /app` in the `Dockerfile` sets the working directory for any subsequent instructions in the `Dockerfile`. In this case, `WORKDIR /app` is setting the working directory inside the Docker container to `/app`. This means that when you later use commands like `COPY`, `RUN`, or `CMD` in your `Dockerfile`, they will be executed relative to the `/app` directory within the container.
- Setting a working directory is helpful for organizing a `Dockerfile` and ensuring that commands operate in the correct context within the container. In many cases, you'll see `/app` used as the working directory because it's a common convention for storing application code within Docker containers. However, you can choose any directory structure that makes sense for your specific application.
- It then copies the `package.json` and `package-lock.json` files, installs the dependencies, copies the rest of the application files.
- The `RUN npm install` command is used to install Node.js dependencies for your project within the Docker image.
- The `CMD ['node', 'server.js']` instruction in a Dockerfile specifies the default command that should be executed when a container based on the Docker image is launched.

- **Remark**:
  - When using `nodemon` then, the `CMD` instruction in your `Dockerfile` would typically change to `CMD ["npm", "run", "dev"]`
  - This tells Docker to run the `npm run dev` command inside the container, which starts your server using `nodemon`.

## Step #7.2: Build Docker Image

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

## Step #7.3: Run Docker Container

- After the image is built, you can run the **Docker Container** by:
  ```sh
    # run the docker Container
    docker run -p 3000:3000 my-express-app
  ```
- When you run a Docker container without specifying a name using the `docker run` command, Docker automatically assigns a random, unique name to the container. If you want to specify a custom name for your container when running it with `docker run`, you can use the `--name` flag followed by the desired name.4
  ```sh
    # run the docker Container
    docker run --name my-express-app-container -p 3000:3000 my-express-app
  ```
- This command runs your Docker container with the name "my-express-app-container". Specifying a custom name can be helpful for easier identification and management of containers, especially when working with multiple containers.
- After the completion of this process, a docker image will be created. To see all your docker images, run the following command in your terminal
  ```sh
      docker images
  ```
- Access Express.js server:
  - Open a web browser and navigate to http://localhost:3000

# Step #8: Run the Application Using Docker Compose

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [mongoose.com - Schemas](https://mongoosejs.com/docs/guide.html)
