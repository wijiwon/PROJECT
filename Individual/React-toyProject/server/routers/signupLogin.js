const router = require("express").Router();
const { UserAdd, Login } = require("../controllers");

// 회원가입 시 실행되는 컨트롤러
router.post("/create", UserAdd);

// 로그인 시 실행되는 컨트롤러
router.post("/login", Login);

module.exports = router;
