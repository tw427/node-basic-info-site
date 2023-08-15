const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("about");
});

router.post("/", (req, res) => {
  res.send("Posting from about.js");
});

router
  .route("/:id")
  .get((req, res) => {
    // Middleware is passing in the request here to access our users array
    console.log(req.user);
    res.send(`Get id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update (put) id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete (delete) id: ${req.params.id}`);
  });

const users = [{ name: "Tony" }, { name: "Katie" }];
// Whenver our route goes to a param with "id" run this function with a req, res, next, and param
// .param is a middleware that runs before and after get, put, delete
router.param("id", (req, res, next, id) => {
  // setting our .user request to access our users array
  req.user = users[id];
  next();
});

module.exports = router;
