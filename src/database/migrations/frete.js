'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('fretes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      frete_bruto: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      frete_liquido: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      origem:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      destino:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      finalizado:{
        type: Sequelize.BOOLEAN,
        default: false,
        allowNull: false,
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
  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');

  }
};
