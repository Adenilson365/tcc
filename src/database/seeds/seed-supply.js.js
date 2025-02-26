'use strict';

const { user } = require('pg/lib/defaults');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('supplies', [
      {
        fuel_quantity: 500,
        purchase_value: 7.40,
        fuel_type: 'Diesel',
        invoice_number: '123456',
        description: 'Diesel for the truck',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 1
      },
      {
        fuel_quantity: 200,
        purchase_value: 7.50,
        fuel_type: 'Diesel-S10',
        invoice_number: '1656545',
        description: 'Diesel for the truck',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: 2
      }
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('supplies', null, {});
  }
};
