import Expense from "../models/Expense";

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
          const total = await Expense.sum('purchase_value', { where: { user_id: req.userId } });
          return res.status(200).json({ totalExpenses: total });
        } catch (error) {
          console.error('Erro ao calcular o total de despesas:', error);
          return res.status(500).json({ message: 'Erro ao obter o total de despesas' });
        }
      }
    
}

export default new ExpenseController();