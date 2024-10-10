import Freight from '../models/Freight';

class FreightController {
  async store(req, res) {
    const freight = await Freight.create({
      user_id: req.userId,
      ...req.body
    });
    return res.json(freight);
  }

  async index(req, res) {
    const freights = await Freight.findAll(
      {
        where: {
          user_id: req.userId
        }
      }
    );
    return res.send(freights);
  }
  async totalFreight(req, res) {
    try {
      const total_net = await Freight.sum('net_freight', { where: { user_id: req.userId } });
      const total_gross = await Freight.sum('gross_freight', { where: { user_id: req.userId } });
      return res.status(200).json({ 
        totalFreight: total_net || 0, 
        totalFreightGross: total_gross || 0 
      });
    } catch (error) {
      console.error('Erro ao calcular o total de fretes:', error);
      return res.status(500).json({ message: 'Erro ao obter o total de fretes' });
    }
  }

}

export default new FreightController();