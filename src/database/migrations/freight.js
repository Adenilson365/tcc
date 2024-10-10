
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('freights', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      gross_freight: { //frete bruto
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      net_freight: { //frete liquido
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      advance: { //adiantamento da viagem
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      money_value_loss: { //perca de mercadoria
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      expents: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },

      profit: {
        type: Sequelize.FLOAT,
      },
      exit_weight: { //peso de saida ou carregamento
        type: Sequelize.FLOAT,
      },
      arrival_weight: { //peso de chegada após descarga
        type: Sequelize.FLOAT,
      },
      origin: { //local de origem do frete
        type: Sequelize.STRING,

      },
      destination: { //local de entrega do frete
        type: Sequelize.STRING,
      },
      completed: { //foi entregue?
        type: Sequelize.BOOLEAN,
        default: false,
      },
      additional:{
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('freights');
  }
};
