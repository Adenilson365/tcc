import Supply from '../models/Supply';

class SupplyController {
  async store(req, res) {
    const supply = await Supply.create(req.body);
    return res.json(supply);
  }

  async index(req, res) {
    const supplies = await Supply.findAll();
    return res.send(supplies);
  }
}

export default new SupplyController();