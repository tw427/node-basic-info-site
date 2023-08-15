const express = require("express");
const app = express();
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact-me");
const pug = require("pug");

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { message: "Hello Pug!" });
});

app.use("/about", aboutRouter);
app.use("/contact-me", contactRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
