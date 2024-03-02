# Building CRUD API with Express.js and MongoDB

## Table Of Contents

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

    CMD ["npm", "run", "dev"]
  ```

- Build a **Docker Image** with a `docker build` command, `to-do-restful-api-image` is the name of our **Docker image**
  ```sh
    # build a docker image
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
    # stop docker container
    docker stop to-do-restful-api-container

    # remove docker container
    docker rm docker-restful-api-container
  ```

- Access the running server/application from http://localhost:3000 in the browser.

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

### Step 4.1: `CREATE`

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

### Step 4.2: `READ`

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

### Step 4.2: `UPDATE`

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

### Step 4.2: `DELETE`

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

# Resources

1. []()
