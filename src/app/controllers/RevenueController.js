import Revenue from "../models/Revenue";

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
        const { userId } = req;

        const revenues = await Revenue.findAll({
            where: {
                user_id: userId,
            },
        });

        return res.json(revenues);
    }
}

export default new RevenueController();