
exports.up = function(knex) {
    return knex.schema.createTable('contato', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email').notNull()
        table.string('amgs').notNull()
        table.text('mensage').notNull()          
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('contato')
};