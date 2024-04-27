// import express from "express";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// body parser is activated
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Add product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello this is ExpressJS</h1>");
});

app.listen(3000);
