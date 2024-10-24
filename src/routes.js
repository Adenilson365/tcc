import { Router } from "express"
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import VehicleController from "./app/controllers/VehicleController";
import authmiddleware from './app/middlewares/auth'
import FreightController from "./app/controllers/FreightController";
import SupplyController from "./app/controllers/SupplyController";
import ExpenseController from "./app/controllers/ExpenseController";
import CalculatorController from "./app/controllers/CalculatorController";
import RevenueController from "./app/controllers/RevenueController";
const routes = new Router();

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.get('/validate-token', SessionController.validateToken);

routes.use(authmiddleware)

routes.put('/users', UserController.update);
routes.post('/vehicles',VehicleController.store )
routes.get('/vehicles',VehicleController.index )
routes.get('/users/info', UserController.getUserInfo)

//Rotas fretes
routes.get('/freights',FreightController.index)
routes.post('/freights',FreightController.store)
routes.get('/freights/total',FreightController.totalFreight)

//Combustivel
routes.get('/supplies', SupplyController.index)
routes.post('/supplies', SupplyController.store)
routes.get('/supplies/total', SupplyController.getTotalSupplies)

// despesas
routes.get('/expenses', ExpenseController.index)
routes.post('/expenses', ExpenseController.store)
routes.get('/expenses/total', ExpenseController.getTotalExpenses)

// calculadora
routes.get('/calculator', CalculatorController.getNetValue)

//Revenues
routes.get('/revenues', RevenueController.index)
routes.post('/revenues', RevenueController.store)

//validate token
routes.get('/validate-token', SessionController.validateToken);

export default routes;