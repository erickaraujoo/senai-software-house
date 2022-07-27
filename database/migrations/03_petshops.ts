import knex from 'knex'

exports.up = async function (knex: knex) {
  return knex.schema.createTable('petshops', (table) => {
    table.increments('id').primary()
    table.string('company_name', 200).notNullable()
    table.timestamps(true, true)
  })
}

exports.down = async function (knex: knex) {
  return knex.schema.dropTable('petshops')
}
