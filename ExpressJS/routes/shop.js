const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  res.send("<h1>Hello this is ExpressJS</h1>");
});

module.exports = router;
