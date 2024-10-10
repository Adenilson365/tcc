import Sequelize, { Model } from "sequelize";

class Vehicle extends Model{
    static init (sequelize){
        super.init(
            {
                placa: Sequelize.STRING,
                active: Sequelize.BOOLEAN,
                description: Sequelize.STRING
                
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: "user_id", as: "users" });
        //belongsTo: Define a relação de 1:N 1 usuário tem muitas despesas
    }
}

export default Vehicle;