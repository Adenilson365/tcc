'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('abastecimentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      purchase_value:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fuel_type:{
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }
  )},

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('abastecimentos');

  }
};
