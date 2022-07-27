import knex from 'knex'

exports.seed = async function (knex: knex) {
  return knex('petshops').insert([
    { company_name: 'Pet Shop LTDA' },
    { company_name: 'Pet Shop Perdizes' },
    { company_name: 'MMG Pet Shop Eireli' },
  ])
}
