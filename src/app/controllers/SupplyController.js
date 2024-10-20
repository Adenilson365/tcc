import Supply from '../models/Supply';
const { Op } = require('sequelize');
class SupplyController {
  async store(req, res) {
    const supply = await Supply.create({
      user_id: req.userId,
      ...req.body,

    });
    return res.json(supply);
  }

  async index(req, res) {
    //Documentação do método no README da raiz do projeto
    try {
        const { month } = req.query;
        const whereClause = { user_id: req.userId };

        if (month) {
            const [year, monthIndex] = month.split('-');
            const startDate = new Date(Date.UTC(year, monthIndex - 1, 1)); 
            const endDate = new Date(Date.UTC(year, parseInt(monthIndex), 1));

            whereClause.createdAt = {
                [Op.gte]: startDate,
                [Op.lt]: endDate,
            };
        }

        const supplies = await Supply.findAll({
            where: whereClause
        });
        return res.send(supplies);
    } catch (error) {
        console.error('Erro ao obter os abastecimentos:', error);
        return res.status(500).json({ message: 'Erro ao obter os abastecimentos' });
    }
}

  async getTotalSupplies(req, res) {
        //Documentação do método no README da raiz do projeto
    try {
        const { month } = req.query; 
        const whereClause = { user_id: req.userId };

        if (month) {
            const [year, monthIndex] = month.split('-');
            const startDate = new Date(Date.UTC(year, monthIndex - 1, 1)); 
            const endDate = new Date(Date.UTC(year, parseInt(monthIndex), 1));

            whereClause.createdAt = {
                [Op.gte]: startDate,
                [Op.lt]: endDate,
            };
        }

        const total = await Supply.sum('purchase_value', { where: whereClause });
        const quantity = await Supply.sum('fuel_quantity', { where: whereClause });
        return res.status(200).json({
            totalSupplies: total || 0,
            totalQuantity: quantity || 0
        });
    } catch (error) {
        console.error('Erro ao calcular o total de abastecimentos:', error);
        return res.status(500).json({ message: 'Erro ao obter o total de abastecimentos' });
    }
}
}

export default new SupplyController();