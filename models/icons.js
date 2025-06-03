"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Icons extends Model {
    static associate(models) {
      Icons.belongsTo(models.Category, { foreignKey: "categoryId" });
      Icons.belongsToMany(models.Tag, {
        through: models.IconsTag,
        foreignKey: "iconId",
      });
    }
  }
  Icons.init(
    {
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      svgText: DataTypes.STRING,
      createdTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Icons",
    }
  );
  return Icons;
};
