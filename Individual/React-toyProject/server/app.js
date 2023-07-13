// 사용할 모듈
// express express-session jsonwebtoken axios sequelize dotenv cors mysql2

const express = require("express");
const session = require("express-session");
const app = express();
const { sequelize } = require("./models");
const dot = require("dotenv").config();
const cors = require("cors");
const SignupRouter = require("./routers/signupLogin");
const PostRouter = require("./routers/Post");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.urlencoded({ extended: false }));

// json 객체로 넘겨받을 거임
app.use(express.json());

app.use(
  session({
    secret: process.env.ACCESS_TOKEN_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

sequelize
  .sync({ forsea: false })
  .then(() => {
    console.log("sequelize 연결성공");
  })
  .catch((err) => {
    console.log("sequelize", err);
  });

app.use("/signup", SignupRouter);
app.use("/post", PostRouter);

app.listen(8000, () => {
  console.log("서버열림");
});
