const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write(req.url);
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
