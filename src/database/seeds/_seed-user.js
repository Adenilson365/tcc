'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
    {
      "name": "Fulano de Tal",
      "email": "fulano@fulano.com",
      "password_hash": "$2a$08$fA9qm1IwhizlfcHELhs9ou/gk/9TIzDAg0.3phCWzbGF2QqWY/dwa",
      created_at: new Date(),
      updated_at: new Date(),
     },
     {
      "name": "Siclano de Tal",
      "email": "siclano@siclano.com",
      "password_hash": "$2a$08$fA9qm1IwhizlfcHELhs9ou/gk/9TIzDAg0.3phCWzbGF2QqWY/dwa",
      created_at: new Date(),
      updated_at: new Date(),
     },
    ]);
   
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('users', null, {});

  }
};
