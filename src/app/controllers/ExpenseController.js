import Expense from "../models/Expense";
const { Op } = require('sequelize');
class ExpenseController {
    
    async store(req, res) {
        const expense = await Expense.create(
            {
                user_id: req.userId,
                ...req.body
            }
        );
        return res.json(expense);
    }

    async index(req, res) {
        const expenses = await Expense.findAll(
            {
                where: {
                    user_id: req.userId
                }
            }
        );
        return res.send(expenses);
    }
  

    async getTotalExpenses(req, res) {
        //Documentação do método no README da raiz do projeto
      try {
        const { month } = req.query; 
        const whereClause = { user_id: req.userId };

        if (month) {
          const [year, monthIndex] = month.split('-');
          const startDate = new Date(Date.UTC(year, monthIndex - 1, 1)); 
          const endDate = new Date(Date.UTC(year, monthIndex, 1)); 
    
          whereClause.createdAt = {
            [Op.gte]: startDate,
            [Op.lt]: endDate,
          };
        }
    
        const total = await Expense.sum('purchase_value', { where: whereClause });
        return res.status(200).json({ totalExpenses: total });
      } catch (error) {
        console.error('Erro ao calcular o total de despesas:', error);
        return res.status(500).json({ message: 'Erro ao obter o total de despesas' });
      }
    }
    
    }      

export default new ExpenseController();