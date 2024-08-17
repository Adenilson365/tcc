import { where } from 'sequelize';
import Vehicle from '../models/Vehicle';


class VehicleController {
    async store(req, res) {

        const vehicleExists = await Vehicle.findOne({
            where: { placa: req.body.placa }
        })

        if (vehicleExists) {
            return res.status(400).json({ error: "Veículo já cadastrado" });
        }
        const { id, placa, active, description } = await Vehicle.create(req.body)
        return res.json({
            id,
            placa,
            active,
            description,

        })
    }
    async index(req, res) {
        console.log(req.body.active)
        if(req.body.active === "all"){
            const vehicles = await Vehicle.findAll()
            return res.send(vehicles)
        }
        const vehicles = await Vehicle.findAll({
            where:{
                active:req.body.active
            }
        });
        return res.send(vehicles)
    }

}

export default new VehicleController();