import  Sequelize, { Model } from "sequelize";

class Revenue extends Model {
    static init(sequelize) {
        super.init(
            {
                value: Sequelize.FLOAT,
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
        //belongsTo: Define a relação de 1:N 1 usuário tem muitas receitas
    }

}

export default Revenue;