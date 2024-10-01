import { Sequelize } from "sequelize";
import databaseConfig from "../config/database";
import User from '../app/models/User';
import Vehicle from "../app/models/Vehicle";
import Freight from "../app/models/Freight";
import Supply from "../app/models/Supply";
import Expense from "../app/models/Expense";

const models = [User, Vehicle, Freight, Supply, Expense];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();