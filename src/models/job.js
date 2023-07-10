"use strict";
const { Model } = require("sequelize");

Model.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    static associate(models) {
    }
  }
  Jobs.init(
    {
      CIF: DataTypes.STRING,
      titleJob: DataTypes.STRING,
      contentJob: DataTypes.TEXT,
      dateJob: DataTypes.STRING,
      statusJob: DataTypes.STRING,
      deadlineJob: DataTypes.DATE,
      timelineJob: DataTypes.DATE,
      timeline_Job: DataTypes.TIME,
      noteJob: DataTypes.TEXT,
      Rptdate: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Jobs",
      tableName: "JOBS",
      timestamps: false,
    }
  );
  return Jobs;
};
