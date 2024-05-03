const express = require("express");
const path = require("path");
const adminData = require("./admin");

const roodDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop");
});

exports.routes = router;
