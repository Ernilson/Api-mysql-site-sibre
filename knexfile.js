// Update with your config settings.

module.exports = {
 
  client: 'mysql',
  connection: {
    host:'mysql741.umbler.com',
    database: 'sibre',
    user:     'ernilson',
    password: 'Musica25',
    port:41890
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

