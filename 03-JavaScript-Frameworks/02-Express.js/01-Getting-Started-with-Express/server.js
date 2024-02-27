// server.js

const express = require("express");

// create an express application object
const app = express();

// create a PORT that the server is listening on
const PORT = process.env.PORT || 3000; //use environment variables and if not, 3000

// define routes
app.get("/", (req, res) => {
  res.send("Hello World!"); //Sending back a text response
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
