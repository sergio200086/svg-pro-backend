import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME_DB,
  process.env.PASSWORD_DB,
  {
    host: "localhost",
    dialect: process.env.DB_DIALECT || "postgres",
    logging: false,
  }
);

export default sequelize;
