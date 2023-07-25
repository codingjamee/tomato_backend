const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const db = require("./util/database");
const upload = require("./middlewares/uploadMiddleware");

const cateRoutes = require("./routes/cate");
const adminRoutes = require("./routes/admin");
const base64Img = require("base64-img");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.execute("SELECT * FROM products")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", adminRoutes);
app.use("/", cateRoutes);

app.listen(8080);
