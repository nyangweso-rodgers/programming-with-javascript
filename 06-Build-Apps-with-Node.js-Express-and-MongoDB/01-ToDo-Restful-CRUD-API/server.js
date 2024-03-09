// server.js
import express from "express";
import mongoose, { mongo } from "mongoose";
import morgan from "morgan";
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
app.use(morgan("dev"));

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

//delete a todo item
app.delete("/todos/:id", async (req, res) => {
  try {
    await ToDo.findByIdAndDelete(req.params.id);
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//create a port that the server is listening on
//const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
