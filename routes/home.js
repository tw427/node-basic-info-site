const express = require("express");
const home = express.Router();

const array = [];

home.get("/", (req, res) => {
  res.json({ name: "frodo" });
});

home.get("/test", (req, res) => res.json({ array }));

home.post("/test", (req, res) => {
  array.push(req.body.item);
  res.send("success!");
});

module.exports = home;
