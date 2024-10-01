import Freight from '../models/Freight';

class FreightController {
  async store(req, res) {
    const freight = await Freight.create(req.body);
    return res.json(freight);
  }

  async index(req, res) {
    const freights = await Freight.findAll();
    return res.send(freights);
  }

}

export default new FreightController();