"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IconsTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      IconsTag.belongsTo(models.Icons, { foreignKey: "iconId" });
      IconsTag.belongsTo(models.Tags, { foreignKey: "tagId" });
    }
  }
  IconsTag.init(
    {},
    {
      sequelize,
      modelName: "IconsTag",
    }
  );
  return IconsTag;
};
