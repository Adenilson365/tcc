import Revenue from "../models/Revenue";
const { Op } = require('sequelize');
class RevenueController {
    async store(req, res) {
        const { value, description } = req.body;
        const { userId } = req;

        const revenue = await Revenue.create({
            value,
            description,
            user_id: userId,
        });

        return res.json(revenue);
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

            const revenues = await Revenue.findAll({ where: whereClause });
            return res.json(revenues);
        } catch (error) {
            console.error('Erro ao buscar as receitas:', error);
            return res.status(500).json({ message: 'Erro ao buscar as receitas' });
        }
    }
}

export default new RevenueController();