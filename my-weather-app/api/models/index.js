import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

export const Forecast = sequelize.define(
  "forecast",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // location_country: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { updatedAt: "updated_at", createdAt: "created_at" }
);
