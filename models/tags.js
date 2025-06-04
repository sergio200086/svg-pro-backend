"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tags.belongsToMany(models.Icons, {
        through: models.IconsTag,
        foreignKey: "tagId",
      });
    }
  }
  Tags.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tags",
      timestamps: false,
    }
  );
  return Tags;
};
