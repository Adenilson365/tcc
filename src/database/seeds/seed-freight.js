'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('freights', [{

      "gross_freight": 3500.00,
      "net_freight": 652.80,
      "advance": 2530.00,
      "money_value_loss": 83.55,
      "expents": 233.65,
      "profit": 3182.80,
      "exit_weight": 35.80,
      "arrival_weight": 35.70,
      "origin": "Sinop",
      "destination": "Sarandi",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      "gross_freight": 4500.00,
      "net_freight": 2120,
      "advance": 2700.00,
      "money_value_loss": 0,
      "expents": 180,
      "profit": 4820,
      "additional": 500,
      "exit_weight": 35.80,
      "arrival_weight": 35.70,
      "origin": "Sinop",
      "destination": "Sarandi",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      "gross_freight": 3500.00,
      "net_freight": 652.80,
      "advance": 2530.00,
      "money_value_loss": 83.55,
      "expents": 233.65,
      "profit": 3182.80,
      "exit_weight": 35.80,
      "arrival_weight": 35.70,
      "origin": "Sinop",
      "destination": "Sarandi",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      "gross_freight": 4500.00,
      "net_freight": 2120,
      "advance": 2700.00,
      "money_value_loss": 0,
      "expents": 180,
      "profit": 4820,
      "additional": 500,
      "exit_weight": 35.80,
      "arrival_weight": 35.70,
      "origin": "Sinop",
      "destination": "Sarandi",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      "gross_freight": 3500.00,
      "net_freight": 652.80,
      "advance": 2530.00,
      "money_value_loss": 83.55,
      "expents": 233.65,
      "profit": 3182.80,
      "exit_weight": 35.80,
      "arrival_weight": 35.70,
      "origin": "Sinop",
      "destination": "Sarandi",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      "gross_freight": 4500.00,
      "net_freight": 2120,
      "advance": 2700.00,
      "money_value_loss": 0,
      "expents": 180,
      "profit": 4820,
      "additional": 500,
      "exit_weight": 35.80,
      "arrival_weight": 35.70,
      "origin": "Sinop",
      "destination": "Sarandi",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {"gross_freight": 3500.00,
    "net_freight": 652.80,
    "advance": 2530.00,
    "money_value_loss": 83.55,
    "expents": 233.65,
    "profit": 3182.80,
    "exit_weight": 35.80,
    "arrival_weight": 35.70,
    "origin": "Sinop",
    "destination": "Sarandi",
    created_at: new Date(),
    updated_at: new Date(),


    }
   
    ]

    );

  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete('freights', null, {});

  }
};
