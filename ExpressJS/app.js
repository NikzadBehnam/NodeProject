// import express from "express";
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const rootDir = require("./util/path");
app.use(express.static(path.join(rootDir, "public")));

const adminData = require("./routes/admin");
const shopData = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use("/", shopData.routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
