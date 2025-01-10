// create a simple http server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
