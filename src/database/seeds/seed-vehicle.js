const { user } = require("pg/lib/defaults");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vehicles', [
      {
        placa: 'AAA1111',
        active: "false",
        description: "Scania teste",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
      },
      {
        placa: 'BBB2222',
        active: "true",
        description: "Volvo teste",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
      },
      {
        placa: 'AAA0F23',
        active: "true",
        description: "Scania nova placa teste",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2
      },
      {
        placa: 'AAA0F80',
        active: "true",
        description: "Volvo nova placa teste",
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vehicles', null, {});
  },
};