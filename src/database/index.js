import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import User from '../app/models/User';
import Vehicle from "../app/models/Vehicle";
import Freight from "../app/models/Freight";
import Supply from "../app/models/Supply";
import Expense from "../app/models/Expense";
import Revenue from "../app/models/Revenue";

const models = [User, Vehicle, Freight, Supply, Expense, Revenue];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

         models.map(model => model.init(this.connection))
        // .map(model => model.associate && model.associate(this.connection.models));


        Object.values(this.connection.models).forEach(model => {
            console.log(`Verificando modelo: ${model ? model.name : 'undefined'}`);
            
            if (model.associate) {
              console.log(`Associando o modelo: ${model.name}`);
              try {
                model.associate(this.connection.models);
                console.log(`Associação para ${model.name} completada com sucesso.`);
              } catch (error) {
                console.error(`Erro ao associar o modelo ${model.name}:`, error);
              }
            } else {
              console.warn(`O modelo ${model.name} não possui o método associate.`);
            }
          });
          
    }
}

export default new Database();