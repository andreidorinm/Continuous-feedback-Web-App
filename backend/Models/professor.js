import { sequelize } from "../sequelize.js";
import { DataTypes } from "sequelize";

const Professor = sequelize.define(
    "Professor",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
)

export { Professor }