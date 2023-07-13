const dot = require("dotenv").config();

// logging : sequelize를 통해 실행되는 sql쿼리와 관련 에러정보를 콘솔에 출력함
const config = {
  dev: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    logging: (sql, queryObject) => {
      console.log(`[SQL QUERY]: ${sql}`);
    },
  },
};

module.exports = config;
