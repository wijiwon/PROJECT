const Post = require("./Post");
const User = require("./User");
const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};
db.sequelize = sequelize;
db.Post = Post;
db.User = User;

Post.init(sequelize);
User.init(sequelize);

module.exports = db;
