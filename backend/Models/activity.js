import { sequelize } from "../sequelize.js";
import { DataTypes } from "sequelize";

const Activity = sequelize.define(
    "Activity",
    {
        accessCode: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING,
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        duration: DataTypes.TIME
    }
)

export { Activity }