module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vehicles', [
      {
        placa: 'AAA1111',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vehicles', null, {});
  },
};