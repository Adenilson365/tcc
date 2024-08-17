import { Router } from "express"
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import VehicleController from "./app/controllers/VehicleController";
import authMiddleware from './app/middlewares/auth'
const routes = new Router();

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)
routes.put('/users', authMiddleware, UserController.update);
routes.post('/vehicles',authMiddleware,VehicleController.store )
routes.get('/vehicles',authMiddleware,VehicleController.index )

export default routes;