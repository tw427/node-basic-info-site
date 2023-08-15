const express = require("express");
const app = express();
const aboutRouter = require("./routes/about");

const pug = require("pug");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { message: "Hello Pug!" });
});

app.use("/about", aboutRouter);

app.get("/contact-me", (req, res) => {
  res.render("contact-me");
});

app.listen(3000);
