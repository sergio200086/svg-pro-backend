"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Icons extends Model {
    static associate(models) {
      Icons.belongsTo(models.Categories, { foreignKey: "categoryId" });
      Icons.belongsToMany(models.Tags, {
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
      timestamps: false,
    }
  );
  return Icons;
};
