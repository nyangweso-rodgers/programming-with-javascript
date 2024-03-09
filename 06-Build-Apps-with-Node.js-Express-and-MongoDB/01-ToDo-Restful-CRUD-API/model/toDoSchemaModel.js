// todo schema
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const toDoSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    created_by: { type: String, required: true, default: "Rodgers Nyangweso" },
    updated_by: { type: String, required: true, default: "Rodgers Nyangweso" },
  },
  { timestamps: true }
);

// use the schema to create a model
const ToDo = model("ToDo", toDoSchema);
export default ToDo;
