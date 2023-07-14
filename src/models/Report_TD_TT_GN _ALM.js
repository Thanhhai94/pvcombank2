"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DAILYREPORT_TT_GN_ALM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DAILYREPORT_TT_GN_ALM.init(
    {
      Rptdate: DataTypes.STRING,
      KHOI_QL: DataTypes.STRING,
      KY_HAN: DataTypes.STRING,
      NHOM_KH: DataTypes.STRING,
      CHI_TIEU: DataTypes.STRING,
      Amt: DataTypes.FLOAT,
      Mtd: DataTypes.FLOAT,
      Ytd: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "DAILYREPORT_TT_GN_ALM",
      tableName: "DASHBOARD_TT_GN_DAILY_ALM",
      timestamps: false,
    }
  );
  return DAILYREPORT_TT_GN_ALM;
};
