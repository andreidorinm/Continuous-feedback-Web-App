import { sequelize } from '../sequelize.js';
import { DataTypes } from 'sequelize';

const Feedback = sequelize.define(
  'Feedback',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    activityId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    emoticon: {
      type: DataTypes.ENUM('smiley', 'frowny', 'surprised', 'confused'),
      allowNull: false,
    },
    timeStamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

export { Feedback };
