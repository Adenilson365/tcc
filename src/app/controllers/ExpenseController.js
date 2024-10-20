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
      try {
        const { month } = req.query; // Obtém o mês do parâmetro de consulta (Exemplo: url:/expenses/total?month=2021-01)
        const whereClause = { user_id: req.userId };
    
        //Adiciona a condição de mês, se fornecida
        //Se não for fornecido um mês, a consulta retornará o total de despesas desde o início da conta
        //Formato do mês: yyyy-mm (exemplo: 2021-01 para janeiro de 2021)
        // Se não houver despesas no mês fornecido, retorna null

        if (month) {
          const [year, monthIndex] = month.split('-');
          const startDate = new Date(Date.UTC(year, monthIndex - 1, 1)); // Cria a data de início com base no mês
          const endDate = new Date(Date.UTC(year, monthIndex, 1)); // Cria a data de fim no próximo mês
    
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