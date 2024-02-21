// server.js

import fs from "fs";
import http from "http";
//import path from "path";

const port = 8080;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    // check if index.html exists and serve it
    fs.access("index.html", fs.constants.F_OK, (err) => {
      if (err) {
        // file not found, send 404 error message
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      } else {
        // file exists, read and serve it
        fs.readFile("index.html", (err, data) => {
          if (err) {
            // internal server error
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
          }
        });
      }
    });
  } else if (url === "/style.css") {
    // check if style.css exists and serve it
    fs.access("style.css", fs.constants.F_OK, (err) => {
      if (err) {
        // file not found, send 404 error message
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      } else {
        fs.readFile("style.css", (err, data) => {
          if (err) {
            // Internal server error
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(data);
            res.end();
          }
        });
      }
    });
  } else {
    // Handle other potential requests for different files
    // ...
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
