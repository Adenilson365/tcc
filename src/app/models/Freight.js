import Sequelize, { Model } from "sequelize";

class Freight extends Model {
  static init(sequelize) {
    super.init(
      {
        gross_freight: Sequelize.FLOAT,
        net_freight: Sequelize.FLOAT,
        advance: Sequelize.FLOAT,
        money_value_loss: Sequelize.FLOAT,
        expents: Sequelize.FLOAT,
        profit: Sequelize.FLOAT,
        exit_weight: Sequelize.FLOAT,
        arrival_weight: Sequelize.FLOAT,
        origin: Sequelize.STRING,
        destination: Sequelize.STRING,
        completed: Sequelize.BOOLEAN,
        additional: Sequelize.FLOAT,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
    return this;
  }
}

export default Freight;