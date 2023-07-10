"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CHI_QUY extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  CHI_QUY.init(
    {
      Date: DataTypes.DATE,
      Noi_Dung: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "CHI_QUY",
      tableName: "CHI_QUYS",
      timestamps: false,
    }
  );
  return CHI_QUY;
};
