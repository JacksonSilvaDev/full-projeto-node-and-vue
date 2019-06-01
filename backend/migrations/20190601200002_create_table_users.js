
exports.up = function(knex, Promise) {
    // Criando um schema de table users
    return knex.schema.createTable('users', table => {
        // Colocando o id como chave primária
        table.increments('id').primary()
        // Setando que ela não pode ser nullo
        table.string('name').notNull()
        // Setando que o valor email sera unico
        table.string('email').notNull().unique()
        table.string('password').notNull()
        // Setando valor padrão de inicio
        table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
