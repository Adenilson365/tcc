'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('vehicles', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      placa: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      active:{
        type:Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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

  async down (queryInterface) {

   await queryInterface.dropTable('vehicles');

  }
};


