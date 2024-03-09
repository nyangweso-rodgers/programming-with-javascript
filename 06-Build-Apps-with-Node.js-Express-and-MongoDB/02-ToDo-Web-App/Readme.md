# Build ToDo Web App with Node.js, Express and MongoDB

## Table Of Contents

## Step #6: Define a Schema

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

# Resources

1. []()
