const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  let fileName = `.${q.pathname}.html`;

  if (q.pathname === "/") {
    fileName = "./index.html";
  }

  fs.readFile(`${fileName}`, (err, data) => {
    if (err) {
      fs.readFile("./404.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
