import Freight from '../models/Freight';
const { Op } = require('sequelize');
class FreightController {
  async store(req, res) {
    const freight = await Freight.create({
      user_id: req.userId,
      ...req.body
    });
    return res.json(freight);
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

        const freights = await Freight.findAll({ where: whereClause });
        return res.send(freights);
    } catch (error) {
        console.error('Erro ao buscar os fretes:', error);
        return res.status(500).json({ message: 'Erro ao buscar os fretes' });
    }
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