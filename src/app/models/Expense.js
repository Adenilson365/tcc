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

    static associate(models){
        this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
        //belongsTo: Define a relação de 1:N 1 usuário tem muitas despesas
    }

}


export default Expense;