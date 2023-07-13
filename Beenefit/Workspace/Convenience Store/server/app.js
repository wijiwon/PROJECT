// 사용한 모듈
// express, puppeteer, dotenv, sequelize, cors

const express = require("express");
const app = express();
const testRouter = require("./routers/test");
const cors = require("cors");
const { sequelize } = require("./models");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("sequelize 연결성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", testRouter);

app.listen(5500, () => {
  console.log("서버열림");
});
