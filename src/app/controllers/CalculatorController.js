import { Op } from "sequelize";
import Expense from "../models/Expense";
import Supply from "../models/Supply";
import Freight from "../models/Freight";
import Revenue from "../models/Revenue";

class CalculatorController {
    async getNetValue(req, res) {
        try {
            //Documentação do método no README da raiz do projeto
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

            // Calcula os totais das despesas, abastecimentos, fretes e receitas
            const totalExpenses = await Expense.sum('purchase_value', { where: whereClause });
            const totalSupplies = await Supply.sum('purchase_value', { where: whereClause });
            const totalFreights = await Freight.sum('net_freight', { where: whereClause });
            const totalRevenues = await Revenue.sum('value', { where: whereClause });

            // Valor líquido é o total de fretes e receitas menos as despesas e abastecimentos
            const netValue = (totalFreights + totalRevenues) - (totalExpenses + totalSupplies);
            const totalReceived = totalRevenues + totalFreights;

            // Retorna os valores calculados
            return res.status(200).json({
                totalExpenses,
                totalSupplies,
                totalFreights,
                totalRevenues,
                netValue,
                totalReceived
            });
        } catch (error) {
            console.error('Erro ao calcular o valor líquido:', error);
            return res.status(500).json({ message: 'Erro ao calcular o valor líquido' });
        }
    }
}

export default new CalculatorController();
