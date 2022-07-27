import knex from 'knex'

exports.up = async function (knex: knex) {
  return knex.schema.createTable('clients_pets', (table) => {
    table.increments('id').primary()
    table.integer('clients_id', 200).notNullable().references('id').inTable('clients')
    table.integer('pets_id').notNullable().references('id').inTable('pets')
    table.timestamps(true, true)
  })
}

exports.down = async function (knex: knex) {
  return knex.schema.dropTable('clients_pets')
}
