import knex from 'knex'

exports.up = async function (knex: knex) {
  return knex.schema.createTable('clients', (table) => {
    table.increments('id').primary()
    table.string('name', 200).notNullable()
    table.string('phone', 13).notNullable()
    table.string('email', 100).notNullable()
    table.integer('age').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = async function (knex: knex) {
  return knex.schema.dropTable('clients')
}
