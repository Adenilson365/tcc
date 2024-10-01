import Expense from "../models/Expense";

class ExpenseController {
    async store(req, res) {
        const expense = await Expense.create(req.body);
        return res.json(expense);
    }

    async index(req, res) {
        const expenses = await Expense.findAll();
        return res.send(expenses);
    }
}

export default new ExpenseController();