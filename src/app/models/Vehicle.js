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
}

export default Vehicle;