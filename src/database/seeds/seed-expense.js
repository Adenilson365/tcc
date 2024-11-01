'use strict';

const { user } = require('pg/lib/defaults');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('expenses', [
      {
        description: 'Lunch',
        purchase_value: 10.50,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
      },
      {
        description: 'Dinner',
        purchase_value: 20.00,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2
      },
      {
        description: 'Breakfast',
        purchase_value: 5.00,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
      },
      {
        description: 'Lunch',
        purchase_value: 37.00,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('expenses', null, {});
  }
};
