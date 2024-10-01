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