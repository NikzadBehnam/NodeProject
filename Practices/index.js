const express = require("express");
const app = express();

app.use("/user", (req, res, next) => {
  console.log("<h1>First Response</h1>");
  res.send("<h1>First Response</h1>");
});

app.use("/", (req, res, next) => {
  console.log("<h1>Second Response...</h1>");
  res.send("<h1>Second response ... </h1>");
});

app.listen(3000);
