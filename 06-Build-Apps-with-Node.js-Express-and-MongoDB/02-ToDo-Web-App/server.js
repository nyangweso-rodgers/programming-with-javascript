//server.js
import express from "express";
import morgan from "morgan";



const app = express();

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.send("<h1>Welcome to the world of Express.js</h1>");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
