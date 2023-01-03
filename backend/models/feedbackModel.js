import sequelize from '../sequelize.js';
import DataTypes from 'sequelize';

const Feedback = sequelize.define('Feedback', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  emoticon: {
    type: DataTypes.ENUM('smiley', 'frowny', 'surprised', 'confused'),
    allowNull: false,
  },
  activityCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Feedback;
