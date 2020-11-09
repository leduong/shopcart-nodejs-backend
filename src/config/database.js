module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './sqlite.db',
    operatorsAliases: 0,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 0,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    operatorsAliases: 0,
  },
};