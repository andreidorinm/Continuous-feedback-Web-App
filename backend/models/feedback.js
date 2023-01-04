'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback.init(
    {
      id: DataTypes.INTEGER,
      emoticon: DataTypes.ENUM('smiley', 'frowny', 'surprised', 'confused'),
      activityCode: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Feedback',
    }
  );
  return Feedback;
};
