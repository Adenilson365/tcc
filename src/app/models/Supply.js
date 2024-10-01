import Sequelize, { Model } from "sequelize";

class Supply extends Model {
    static init(sequelize) {
        super.init(
            {
                fuel_quantity: Sequelize.INTEGER,
                purchase_value: Sequelize.FLOAT,
                fuel_type: Sequelize.STRING,
                invoice_number: Sequelize.STRING,
                description: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Supply;