import { sequelize } from "../sequelize.js";
import { DataTypes } from "sequelize";

const Student = sequelize.define(
    "Student",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
)

export { Student }