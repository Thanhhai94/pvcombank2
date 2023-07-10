"use strict";
const { Model } = require("sequelize");

Model.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

module.exports = (sequelize, DataTypes) => {
  class LSDH extends Model {
    static associate(models) {
    }
  }
  LSDH.init(
    {
      KY_HAN: DataTypes.STRING,
      From_Date: DataTypes.FLOAT,
      To_Date: DataTypes.FLOAT,
      Amt: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "LSDH",
      tableName: "LSDH",
      timestamps: false,
    }
  );
  return LSDH;
};
