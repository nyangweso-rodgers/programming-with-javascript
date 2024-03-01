// server.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ToDo from "./model/toDoSchemaModel.js";

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
app.post("/todos/create", async (req, res) => {
  try {
    const newTodo = await ToDo.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// read a todo
app.get("/todos", async (req, res) => {
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
    const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedToDo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete a todo by id
app.delete("/todos/:id", async (req, res) => {
  try {
    await ToDo.findByIdAndDelete(req.params.id);
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
