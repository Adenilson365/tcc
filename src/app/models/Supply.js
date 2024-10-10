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

    static associate(models){
        this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
        //belongsTo: Define a relação de 1:N 1 usuário tem muitas despesas
    }
}

export default Supply;