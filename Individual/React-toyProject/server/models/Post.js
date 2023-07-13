const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        text: {
          type: Sequelize.STRING(500),
        },
        writer: {
          type: Sequelize.STRING(10),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: "false",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = Post;
