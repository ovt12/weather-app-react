import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const db = process.env.NODE_ENV === "TEST" ? process.env.DB_TEST : process.env.DB;

export const sequelize = new Sequelize(db, process.env.DB_USER, process.env.DB_PW, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false,
});


