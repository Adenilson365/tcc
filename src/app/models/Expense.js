import Sequelize, { Model } from "sequelize";

class Expense extends Model {
    static init(sequelize) {
        super.init(
            {
                purchase_value: Sequelize.FLOAT,
                description: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}


export default Expense;