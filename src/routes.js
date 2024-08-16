import { Router } from "express"
import User from "./app/models/User";
import { password } from "./config/database";

const routes = new Router();

routes.get("/teste", async (req, res)=>{
    const user = await User.create({
        name: 'Adenilson2',
        email: "teste@teste2",
        password_hash: '123123'
    })
    
    return res.json(user)
})


export default routes;