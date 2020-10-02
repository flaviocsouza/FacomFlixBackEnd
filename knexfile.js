

module.exports = {

  client: 'postgresql',
  connection: {
    database: 'facomflix',
    user:     'postgres',
    password: '1903gaga'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
