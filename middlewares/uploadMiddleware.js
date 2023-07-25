const multer = require("multer");
const path = require("path");

// multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // 필드명 일치하는 경우 파일을 업로드 허용
    if (
      file.fieldname === "img1" ||
      file.fieldname === "img2" ||
      file.fieldname === "img3" ||
      file.fieldname === "img4" ||
      file.fieldname === "img5"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Unexpected field")); // 일치하지 않는 필드명인 경우
    }
  },
});

module.exports = upload;
