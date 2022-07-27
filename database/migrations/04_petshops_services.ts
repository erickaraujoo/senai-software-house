import knex from 'knex'

exports.up = async function (knex: knex) {
  return knex.schema.createTable('petshops_services', (table) => {
    table.increments('id').primary()
    table.integer('petshops_id').notNullable().references('id').inTable('petshops')
    table.integer('pets_id').notNullable().references('id').inTable('pets')
    table.string('name', 200).notNullable()
    table.string('description').notNullable()
    table.dateTime('scheduling_date').notNullable()
    table.string('duration').notNullable()
    table.decimal('total_amount').notNullable()
    table.boolean('amount_already_paid').notNullable()
    table.timestamps(true, true)
    table.dateTime('finished_at').nullable()
  })
}

exports.down = async function (knex: knex) {
  return knex.schema.dropTable('petshops_services')
}
