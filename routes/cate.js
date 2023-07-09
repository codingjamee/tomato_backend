const express = require("express");

const cateController = require("../controllers/cate");

const router = express.Router();

router.get("/best", cateController.getPosts);

module.exports = router;
