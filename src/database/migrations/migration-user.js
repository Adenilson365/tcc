'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
          type: Sequelize.INTEGER,
          alloNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      name: {
          type: Sequelize.STRING,
          alloNull: false,
      },
      email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
      },
      password_hash: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      created_at: {
          type: Sequelize.DATE,
          allowNull: false,
      },
      updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
      }
})},

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
  }
};
