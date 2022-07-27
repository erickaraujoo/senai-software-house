import knex from 'knex'

exports.up = async function (knex: knex) {
  return knex.schema.createTable('petshops_services', (table) => {
    table.increments('id').primary()
    table.integer('petshops_id').notNullable().references('id').inTable('petshops')
    table.string('name', 200).notNullable()
    table.string('description').notNullable()
    table.string('duration').notNullable()
    table.decimal('total_amount').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = async function (knex: knex) {
  return knex.schema.dropTable('petshops_services')
}
