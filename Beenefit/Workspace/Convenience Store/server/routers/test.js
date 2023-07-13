const router = require("express").Router();
// const express = require("express");
// const router = express.Router();
const { scrapeSave, viewProducts } = require("../controllers/test");

// `/` 라우터에 대한 요청 처리
router.get("/", (req, res) => {
  try {
    scrapeSave();
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/", viewProducts);

module.exports = router;
