import sequelize from '../sequelize.js';

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: DataTypes.STRING,
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Student;
