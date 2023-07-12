const express = require("express");

const cateRoutes = require("./routes/cate");

const app = express();

const db = require("./util/database");

db.execute();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", cateRoutes);

app.listen(8080);
