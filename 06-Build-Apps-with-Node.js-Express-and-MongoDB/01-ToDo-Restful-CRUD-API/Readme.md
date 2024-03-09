# Building CRUD API with Express.js and MongoDB

## Table Of Contents

# Project Description

- Create, Read, Update and Delete To Do Lists Items using an API.

# Step 1: Setup the Application

- Follow these steps, on how to setup and run the application with Docker.

## Step 2: Run the Application with Docker

- Create a `Dockerfile` with the following

  ```Dockerfile
    FROM node:alpine

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    #CMD ["npm", "run", "dev"]
    CMD ["node", "server.js"]
  ```

- Build a **Docker Image** with a `docker build` command, `to-do-restful-api-image` is the name of our **Docker image**
  ```sh
    # build a docker image
    docker build -t to-do-restful-api-image .
  ```
  - Remark:
    - to re-build a **Docker Image**, run the following command
      ```sh
        # re-build a docker image
        docker build -t to-do-restful-api-image .
      ```
- Run the **Docker Container** by:
  ```sh
    # run a docker container
    docker run --name to-do-restful-api-container -p 3000:3000 to-do-restful-api-image
  ```
- For an existing container, you can restart it by:
  ```sh
    # restart docker container
    docker start to-do-restful-api-container
  ```
- To stop and remove an existing container using:

  ```sh
    #stop docker container
    docker stop to-do-restful-api-container

    #remove docker container
    docker rm to-do-restful-api-container
  ```

- Access the running server/application from http://localhost:3000 in the browser.

## Step 2.2: Using Docker Compose

- **Docker Compose** is a tool that allows you to define and manage multi-container Docker applications. While `Dockerfile` are used to create individual container images, **Docker Compose** provides a way to manage the configuration of multiple containers, their dependencies, networks, and volumes in a single `YAML` file.
- Define a `docker-compose.yml` file in the root directory and ..
  - Define your service/container configuration inside this `YAML` file. In this case, we have one service.
  - Specify the image, ports, volumes, environment variables, and any other configurations needed for the service.
    ```yml
    #docker-compose.yml
    version: "3"
    services:
      todo-api:
        build:
          context: .
          dockerfile: Dockerfile
        image: to-do-restful-api-image
        ports:
          - "3000:3000"
        volumes:
          - ./:/app
        environment:
          - NODE_ENV=development
    ```

## Step 3: Define a Schema

- we can create a simple [schema](https://mongoosejs.com/docs/guide.html) by creating a `model` folder inside the `project_folder/` and add a file
  ```sh
    mkdir model
    cd model
    touch todo.js
  ```
- create `toDoSchemaModel.js` file inside `model/` with the following schema definition:

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

- Import the `ToDo` schema into the `server.js` file
  ```js
  //server.js
  import ToDo from "./model/toDoSchemaModel.js";
  ```

## Step 4: Implement CRUD Operations

- before defining routes, add the following to `server.js` file
  ```js
  //middleware provided by Express to parse incoming JSON requests.
  app.use(express.json());
  ```

### Step 4.1: `CREATE` Operation

- we define a code to handle requests to create a new todo item. It tries to create the item, and if successful, it responds with the created item. If there’s an issue during the process, it responds with an error message.
- how to create a to do item:

  ```js
  //server.js
  // ...

  //define routes

  // create a to do item
  app.post("/todos/create", async (req, res) => {
    try {
      const newToDoItem = await ToDo.create(req.body);
      res.status(201).json(newToDoItem);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error!" });
    }
  });

  // ...
  ```

- Here:
  - There’s an `HTTP` `POST` endpoint `/todos/create` for creating a new todo item.
  - When a `POST` request is made to `/todos/create`, the code inside the `async` function is executed.
  - It uses the `ToDo.create` method ([All methods for models](https://mongoosejs.com/docs/api/model.html)) to create a new todo item based on the data in the request body (req.body).
  - If the creation is successful, it responds with a status code `201` and sends the newly created todo item in `JSON` format as a response.
  - If there’s an error during the process, it catches the error and responds with a status code 500 and error message Internal Server Error.

### Step 4.2: `READ` Operation

- how to read a to do item:

  ```js
  //server.js
  // ...

  //define routes

  //read a to do item
  app.get("/todos", async (req, res) => {
    try {
      const getToDoItem = await ToDo.find();
      res.status(200).json(getToDoItem);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // ...
  ```

- Here,
  - there is an `HTTP` `GET` endpoint `/todos` for getting the todo items.
  - When a `GET` request is made to `/todos`, the code inside the `async` function is executed.
  - It uses the `ToDo.find` method ([All methods for models](https://mongoosejs.com/docs/api/model.html)) to fetch all the todo items from the database.
  - If the fetching is successful, it responds with a status code `200` and sends all the todo items in `JSON` format as a response.
  - If there’s an error during the process, it catches the error and responds with a status code `500` and error message `Internal Server Error`.

### Step 4.2: `UPDATE` Operation

- how to update a to do item:

  ```js
  //server.js
  // ...

  //define routes

  //update a to do item
  app.put("/todos/:id", async (req, res) => {
    try {
      const updatedToDoItem = await ToDo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedToDoItem);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // ...
  ```

- Here:
  - There’s an `HTTP` `PUT` endpoint `/todos/:id`, where `:id `is a placeholder for a specific todo item’s id.
  - When a `PUT` request is made, it tries to update a todo in the database with the specified ID (`req.params.id`) using the `ToDo.findByIdAndUpdate` method ([All methods for models](https://mongoosejs.com/docs/api/model.html))..
  - The new data for the todo is expected to be in the request body (`req.body`). This data is sent by the client making the `PUT` request.
  - The third argument { `new: true` } ensures that the method returns the updated todo after the update operation.
  - If the update is successful, it responds with a status `200` and sends the updated todo in `JSON` format in the response body.
  - If any error occurs during the update process (for example, if the specified ID is not found), it catches the error and responds with status `500` and error message `Internal Server Error`.

### Step 4.2: `DELETE` Operation

- how to delete a to do item:

  ```js
  //server.js
  // ...

  //define routes

  //delete a todo item
  app.delete("/todos/:id", async (req, res) => {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      res.status(201).send();
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // ...
  ```

- here,
  - There’s an `HTTP` `DELETE` endpoint `/todos/:id`, where `:id` is a placeholder for a specific todo item’s id.
  - When a `DELETE` request is made, it tries to delete a todo in the database with the specified ID (`req.params.id`) using the `ToDo.findByIdAndDelete` method ([All methods for models](https://mongoosejs.com/docs/api/model.html)).
  - If the deletion is successful, it responds with a status 204(No Content).
  - If any error occurs during the deleting process (for example, if the specified ID is not found), it catches the error and responds with status 500 and error message Internal Server Error.

## Step 5: Testing API

# Resources

1. [Building a Restful CRUD API with Node JS, Express, and MongoDB by Suhail Kakar](https://blog.suhailkakar.com/building-a-restful-crud-api-with-node-js-express-and-mongodb)
