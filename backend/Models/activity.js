import { sequelize } from '../sequelize.js';
import { DataTypes } from 'sequelize';

const Activity = sequelize.define(
  'Activity',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    professorId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
);

export { Activity };
