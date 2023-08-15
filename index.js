const express = require("express");
const app = express();

const pug = require("pug");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { message: "Hello Pug!" });
});

app.listen(3000);
