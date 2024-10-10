'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('revenues', [
      {
        description: 'Estadia',
        value: 300.00,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
      },
      {
        description: 'Ajuste',
        value: 500.00,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2
      },
      {
        description: 'Estadia',
        value: 900.00,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
      },
      {
        description: 'Outros',
        value: 100.00,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2
      },
    ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});
    
  }
};
