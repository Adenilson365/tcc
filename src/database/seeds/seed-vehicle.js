module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vehicles', [
      {
        placa: 'AAA1111',
        active: "false",
        description: "Scania teste",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        placa: 'BBB2222',
        active: "true",
        description: "Volvo teste",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        placa: 'AAA0F23',
        active: "false",
        description: "Scania nova placa teste",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vehicles', null, {});
  },
};