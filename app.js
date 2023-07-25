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

app.use((req, res, next) => {
  if (req.body && req.body.image) {
    const base64Data = req.body.image.split(";base64,").pop(); // Base64 데이터 추출
    const imageFileName = Date.now() + ".jpg"; // 이미지 파일 이름 생성 (여기서는 jpg 확장자로 가정)
    const imagePath = path.join(__dirname, "uploads", imageFileName);

    fs.writeFile(imagePath, base64Data, { encoding: "base64" }, (err) => {
      if (err) {
        console.error("Error saving image:", err);
        return res.status(500).json({ error: "Failed to save image." });
      }

      // 이미지가 성공적으로 저장되었을 때, 파일 경로를 요청 객체에 추가
      req.imagePath = imagePath;
      next();
    });
  } else {
    next();
  }
});

app.get("/image", (req, res) => {
  if (req.imagePath) {
    res.sendFile(req.imagePath); // 이미지 파일 전송
  } else {
    res.status(404).json({ error: "Image not found." });
  }
});

app.use("/", adminRoutes);
app.use("/", cateRoutes);

app.listen(8080);
