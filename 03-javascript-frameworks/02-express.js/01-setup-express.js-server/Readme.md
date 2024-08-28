# Setting Up Express.js Development Environment

## Table Of Contents

# Description

- Learn how to setup an Express application with MongoDB Atlas, or MongoDB docker container, or with PostgreSQL Docker container.

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
