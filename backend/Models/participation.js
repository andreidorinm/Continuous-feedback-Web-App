import { sequelize } from "../sequelize.js";
import { DataTypes } from "sequelize";

//link between Student and Activity
//primarily used for Activity list of participants
const Participation = sequelize.define(
    "Participation",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        activityId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        studentId: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

export { Participation }