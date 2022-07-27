import knex from 'knex'

exports.up = async function (knex: knex) {
  return knex.schema.createTable('petshops_services_scheduled', (table) => {
    table.increments('id').primary()
    table.integer('petshops_services_id').notNullable().references('id').inTable('petshops_services')
    table.integer('pets_id').notNullable().references('id').inTable('pets')
    table.dateTime('scheduling_date').notNullable()
    table.boolean('amount_already_paid').notNullable()
    table.timestamps(true, true)
    table.dateTime('finished_at').nullable()
  })
}

exports.down = async function (knex: knex) {
  return knex.schema.dropTable('petshops_services_scheduled')
}
