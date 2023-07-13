const router = require("express").Router();
const { PostAdd } = require("../controllers");

// 게시글 추가 라우터
router.post("/postAdd", PostAdd);
