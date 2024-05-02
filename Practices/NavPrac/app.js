const express = require("express");
const app = express();
const path = require("path");

const rootDir = require("./util/path");
app.use(express.static(path.join(rootDir, "public")));

const userRoutes = require("./routes/user");
const homeRoutes = require("./routes/home");

app.use("/user", userRoutes);
app.use("/", homeRoutes);

// Move the 404 handler after all other route handlers
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
