'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('expenses', [
      {
        description: 'Lunch',
        purchase_value: 10.50,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'Dinner',
        purchase_value: 20.00,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'Breakfast',
        purchase_value: 5.00,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('expenses', null, {});
  }
};
