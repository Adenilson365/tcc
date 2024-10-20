# tcc

### Comandos de migrations e seed:
- **Migration**: Cria as tabelas no banco de dados a partir do modelo.
- **Seed**: Popula essas tabelas com dados preenchidos na seed.

 - Gerar migrate
```
npx sequelize-cli migration:generate --name migration-name
```
- Criar tabelas no banco de dados a partir das migrations
```
 npx sequelize-cli db:migrate
```
- Deletar todas as tabelas no banco de dados a partir das migrations 
```
 npx sequelize-cli db:migrate:undo:all
```
- Gerar seed
```
 npx sequelize-cli seed:generate --name demo-name
```
- Popular tabelas com seeds
```
npx sequelize-cli db:seed:all
```
- desfazer população das tabelas a partir das seeds
```
npx sequelize-cli db:seed:undo:all
```
- Rodar a aplicação
```
npx nodemon index.js
```

- Ao criar novo modelo, não esquecer de inserir no index.js, para que haja a conexão


## Funções:

### Filtro de busca no Banco de dados por mês:

```javascript
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
```
- A lógica é a mesma para todas as rotas que fazem buscas no banco de dados,
 alterando apenas as varáveis.