const express = require("express");
const path = require("path");

const roodDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(roodDir, "views", "shop.html"));
});

module.exports = router;
