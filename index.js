const express = require("express");
const app = express();
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact-me");
const pug = require("pug");
const homeRouter = require("./routes/home.js");

app.set("view engine", "pug");

app.use("/", homeRouter);
app.use(express.urlencoded({ extended: false }));
app.use("/about", aboutRouter);
app.use("/contact-me", contactRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
