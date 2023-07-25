const Product = require("../models/product");
const path = require("path");
const fs = require("fs");

exports.postProduct = (req, res, next) => {
  const title = req.body.title;
  const category = req.body.category;
  const price = req.body.price;
  const description = req.body.description;
  const uploadedFiles = Object.values(req.files); // req.files 객체의 값들을 배열로 변환

  console.log("Uploaded Files:", uploadedFiles); // 이 줄을 추가하여 uploadedFiles 배열의 내용을 확인합니다.

  //파일을 저장할 디렉토리
  const uploadDir = path.join(__dirname, "uploads");

  const imageUrls = [];

  for (const file of uploadedFiles) {
    const imageFileName = Date.now() + "-" + file[0].originalname;
    const imagePath = path.join(uploadDir, imageFileName);

    fs.writeFile(imagePath, file.buffer, (err) => {
      if (err) {
        console.error("Error saving image:", err);
        return res.status(500).json({ error: "Failed to save image." });
      }

      // 이미지 파일이 성공적으로 저장되었을 때, 해당 파일의 경로를 imageUrls 배열에 추가합니다.
      imageUrls.push(imagePath);

      // 만약 모든 이미지 파일을 처리했다면, 데이터베이스에 제품 정보를 저장합니다.
      if (imageUrls.length === uploadedFiles.length) {
        const product = new Product(
          title,
          category,
          price,
          imageUrls,
          description
        );

        product
          .save()
          .then(() => {
            return res.status(200).json({
              message: "파일이 성공적으로 업로드되었습니다.",
            });
          })
          .catch((err) => {
            console.error("Error saving product:", err);
            return res
              .status(500)
              .json({ error: "Failed to save product information." });
          });
      }
    });
  }
};
