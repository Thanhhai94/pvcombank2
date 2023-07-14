"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Report_TD_Product_Daily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report_TD_Product_Daily.init(
    {
      Rptdate: DataTypes.FLOAT,
      CIF: DataTypes.FLOAT,
      TEN_KH: DataTypes.STRING,
      DIFF: DataTypes.FLOAT,
      NOTE: DataTypes.STRING,
      PHAN_LOAI: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Report_TD_Product_Daily",
      tableName: "DASHBOARD_TD_PRODUCT_DAILY",
      timestamps: false,
    }
  );
  return Report_TD_Product_Daily;
};
