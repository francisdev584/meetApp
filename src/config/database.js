// configurações do sequelize para acessar o database
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'meetappsecret',
  database: 'meetApp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
