import knex from 'knex'

exports.up = async function (knex: knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.string('name', 200).notNullable()
    table.integer('age').notNullable()
    table.double('weight').notNullable()
    table.string('breed', 200).defaultTo('Desconhecido').nullable()
    table.string('species', 100).notNullable()
    table.string('appearance').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = async function (knex: knex) {
  return knex.schema.dropTable('pets')
}
