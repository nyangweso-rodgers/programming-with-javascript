import express from "express";

//create an express application object
const app = express();

app.get("/", (req, res) => {
  res.send("hello, express!");
});

const PORT = 3000; // Choose an available port like 3000, 8000

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
