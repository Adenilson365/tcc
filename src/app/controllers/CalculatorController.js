import Expense from "../models/Expense";
import Supply from "../models/Supply";
import Freight from "../models/Freight";
import Revenue from "../models/Revenue";


class CalculatorController {

    async getNetValue(req, res) {
        try {
            // Calcula os totais das despesas, abastecimentos e fretes
            const totalExpenses = await Expense.sum('purchase_value', { where: { user_id: req.userId } });
            const totalSupplies = await Supply.sum('purchase_value', { where: { user_id: req.userId } });
            const totalFreights = await Freight.sum('net_freight', { where: { user_id: req.userId } });
            const totalRevenues = await Revenue.sum('value', { where: { user_id: req.userId } });

            // Valor líquido é o total de fretes menos as despesas e abastecimentos
            const netValue = (totalFreights + totalRevenues) - (totalExpenses + totalSupplies);

            // Retorna os valores calculados
            return res.status(200).json({
                totalExpenses,
                totalSupplies,
                totalFreights,
                totalRevenues,
                netValue
            });
        } catch (error) {
            console.error('Erro ao calcular o valor líquido:', error);
            return res.status(500).json({ message: 'Erro ao calcular o valor líquido' });
        }
    }
}

export default new CalculatorController();
