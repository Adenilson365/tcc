'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('revenues', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
      },
      value:{
          type: Sequelize.FLOAT,
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
  })
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('revenues');
  }
};
