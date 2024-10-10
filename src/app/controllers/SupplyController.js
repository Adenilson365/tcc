import Supply from '../models/Supply';

class SupplyController {
  async store(req, res) {
    const supply = await Supply.create({
      user_id: req.userId,
      ...req.body,

    });
    return res.json(supply);
  }

  async index(req, res) {
    const supplies = await Supply.findAll(
      {
        where: {
          user_id: req.userId
        }
      }
    );
    return res.send(supplies);
  }
  async getTotalSupplies(req, res) {
    try {
      const total = await Supply.sum('purchase_value', { where: { user_id: req.userId } });
      const quantity = await Supply.sum('fuel_quantity', { where: { user_id: req.userId } });
      return res.status(200).json({ 
        totalSupplies: total || 0,
        totalQuantity: quantity || 0
      });
    }catch (error) {
      console.error('Erro ao calcular o total de abastecimentos:', error);
      return res.status(500).json({ message: 'Erro ao obter o total de abastecimentos' });
    }

  }
}

export default new SupplyController();