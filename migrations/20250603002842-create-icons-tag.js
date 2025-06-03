"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("IconsTags", {
    iconId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: "Icons",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    tagId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: "Tags",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("IconsTags");
}
