const Sequelize = require("sequelize");
const config = require("../config");
const GS25 = require("./product");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev,
  
);

const db = {};
db.sequelize = sequelize;
db.GS25 = GS25;

GS25.init(sequelize);

module.exports = db;
