import knex from 'knex'

exports.seed = async function (knex: knex) {
  return knex('petshops_services_scheduled').insert([
    {
      petshops_services_id: 1,
      pets_id: 1,
      scheduling_date: '2022-08-01 14:00:00',
      amount_already_paid: false,
    },
    {
      petshops_services_id: 2,
      pets_id: 2,
      scheduling_date: '2022-07-26 14:00:00',
      amount_already_paid: true,
      finished_at: knex.fn.now(),
    },
  ])
}
