const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const upload = require("../middlewares/uploadMiddleware");

// /admin => POST
router.post(
  "/admin",
  upload.fields([
    { name: "img1" },
    { name: "img2" },
    { name: "img3" },
    { name: "img4" },
    { name: "img5" },
  ]),
  adminController.postProduct
);

module.exports = router;
