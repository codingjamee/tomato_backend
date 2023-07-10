const express = require("express");

const cateController = require("../controllers/cate");

const router = express.Router();

router.get("/best", cateController.getBest);
router.get("/new", cateController.getNew);
router.get("/basic", cateController.getBasic);
router.get("/outer", cateController.getOuter);
router.get("/top", cateController.getTop);
router.get("/dress", cateController.getDress);
router.get("/bottom", cateController.getBottom);
router.get("/basic", cateController.getBasic);
router.get("/set", cateController.getSet);
router.get("/sale", cateController.getSale);

module.exports = router;
