import knex from 'knex'

exports.seed = async function (knex: knex) {
  return knex('clients_pets').insert([
    {
      clients_id: 2,
      pets_id: 1,
    },
    {
      clients_id: 5,
      pets_id: 2,
    },
  ])
}
