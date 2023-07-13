const Sequelize = require("sequelize");

// gs상품정보
// 1. 상품 이미지 - 이미지 경로를 저장
// 2. 상품 이름 - 이름 데이터 저장
// 3. 상품 가격 - 가격 데이터 저장
// 4. 신상품 태그 - 태그 유무 확인해 bool로 저장

class GS25 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        img: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        category: {
          type: Sequelize.STRING(10),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "GS25",
        tableName: "gs25",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}

module.exports = GS25;
