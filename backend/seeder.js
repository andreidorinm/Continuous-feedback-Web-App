module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Student', [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Student', null, {});
  },
};
