import { Router } from "express"
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import VehicleController from "./app/controllers/VehicleController";
import authMiddleware from './app/middlewares/auth'
import FreightController from "./app/controllers/FreightController";
import SupplyController from "./app/controllers/SupplyController";
import ExpenseController from "./app/controllers/ExpenseController";
const routes = new Router();

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.put('/users', authMiddleware, UserController.update);
routes.post('/vehicles',authMiddleware,VehicleController.store )
routes.get('/vehicles',authMiddleware,VehicleController.index )

//Rotas fretes
routes.get('/freights',authMiddleware,FreightController.index)

//Combustivel
routes.get('/supplies',authMiddleware, SupplyController.index)

// despesas
routes.get('/expenses',authMiddleware, ExpenseController.index)

export default routes;