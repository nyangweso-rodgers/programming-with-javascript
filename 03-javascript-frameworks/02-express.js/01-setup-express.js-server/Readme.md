# Setting Up Express.js Development Environment

## Table Of Contents

# Description

- Learn how to setup an Express application with MongoDB Atlas, or MongoDB docker container, or with PostgreSQL Docker container.

# Express.js Project Structure

1. `app.js`: The main entry point for the Express application, where the Express app is set up and **middlewares**, **routes**, etc., are applied.
2. `prisma/`: Contains the Prisma schema and migration files.
3. `src/`: The source code directory
   1. `controllers/`: Contains controller files, which handle **requests** and **responses**.
   2. `routes/`: Defines the application's routes, linking them to the corresponding **controllers**.
   3. `services/`: Contains business logic and service files that interact with the database through **Prisma**.
   4. `middleware/`
4. `config/` directory holds configuration files for your application, such as database connections, server settings, and environment variables.
5. `utils/`: Utility functions and helper modules are stored in the `utils/` directory. These functions perform common tasks like **validation** and formatting that are used throughout the application.

## Step : Update `package.json` for ES Modules

- To ensure our project fully supports **ES Modules**, we need to make a few small updates to `package.json`.
- Remove `"main": "index.js":` this specifies the entry point of your **Node.js** application or package. As we’re not creating a library or package, this line is irrelevant.
- Add `"type": "module"` This tells **Node.js** to treat all files as ES Modules, so you can use the modern `import`/`export` syntax throughout your project.
- Your `package.json` should now start like this:
  ```json
    {
    "name": "node-express-api",
    "version": "1.0.0",
    "type": "module",
    "scripts": {
      "dev": "nodemon",
      ...
    }}
  ```

## Step :Test the Server

- You can test it by navigating to http://localhost:3000 in your browser. You should see: {"message":"Hello World"}.

## Step : Building for Production

# `app.js` File

- The `app.js` file is the entry point of your application. It’s where you initialize the **Express app**, set up **middleware**, define **routes**, and start the server. Think of it as the control center of your web application.

  ```js
  const express = require("express");
  const app = express();
  const config = require("./config");
  const routes = require("./routes");

  // Middleware setup
  app.use(express.json());

  // Routes setup
  app.use("/api", routes);

  // Start server
  const PORT = config.port || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  module.exports = app;
  ```

# Running the Application Locally

- Modify the generated `package.json` file with the following:
  ```json
    "scripts": {"start": "node app.js", "dev": "nodemon app.js"}
  ```
- This step accomplishes two things:
  - it allows `nodemon` to automatically restart the server whenever you make changes to your server side code
  - we no longer have to use the command "`node app.js`" to start the server. The server can now be started with the command "`npm start`".
- In the terminal, execute:
  ```sh
    npm run dev
  ```
  - this will run the dev script and print "Listening on port 3000" in the terminal implying that the server is running.
- Open up your browser and go to http://localhost:3000 where youll see "Cannot GET /". This means that the server is running but we have not defined a "get" route for "/".
- Alternatively, you can run this script by:
  ```sh
    node app.js
  ```

# Dockerize Express.js App

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

- Where:
  - `FROM node:alpine` is a `Dockerfile` instruction that specifies the base image for building **Docker image**. In this case, it indicates that we're using the official **Node.js Docker image** with the **Alpine Linux distribution** as its base. By using `node:alpine` as the base image, you get a minimal Node.js environment, which is suitable for running Node.js applications like Express.js servers in Docker containers. It includes Node.js itself and a few essential tools and libraries, but it's designed to be lightweight, which helps keep your Docker images small and efficient.
  - The line `WORKDIR /app` in the `Dockerfile` sets the working directory for any subsequent instructions in the `Dockerfile`. In this case, `WORKDIR /app` is setting the working directory inside the Docker container to `/app`. This means that when you later use commands like `COPY`, `RUN`, or `CMD` in your `Dockerfile`, they will be executed relative to the `/app` directory within the container. Setting a working directory is helpful for organizing a `Dockerfile` and ensuring that commands operate in the correct context within the container. In many cases, you'll see `/app` used as the working directory because it's a common convention for storing application code within Docker containers. However, you can choose any directory structure that makes sense for your specific application.
  - It then copies the `package.json` and `package-lock.json` files, installs the dependencies, copies the rest of the application files.
  - The `RUN npm install` command is used to install Node.js dependencies for your project within the Docker image.
  - The `CMD ['node', 'server.js']` instruction in a Dockerfile specifies the default command that should be executed when a container based on the Docker image is launched.

# Express Server with MongoDB

- **Step**: (**Connect to MongoDB**)

  - Create a `.env` file in the root directory and add the following:
    ```env
        MONGODB_URL=<Your MongoDB Connection String>
    ```
  - Create an `app.js` file in the root directory and add the following:

    ```js
    // app.js
    import mongoose, { mongo } from "mongoose";
    import dotenv from "dotenv";

    dotenv.config(); // Load environment variables from .env file

    //connect to MongoDB Atlas
    const MONGO_URI = process.env.MONGO_URI;

    // create an express application object
    const app = express();

    app.use(morgan("dev"));

    mongoose
      .connect(MONGO_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Error connecting to MongoDB:", err));

    // define routes
    app.get("/", (req, res) => {
      res.send("Hello World!"); //Sending back a text response
    });

    //create a port that the server is listening on
    const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
    ```

# Resources

1. [Express official documentation](https://expressjs.com/en/4x/api.html)
2. [mongoose.com - Schemas](https://mongoosejs.com/docs/guide.html)
