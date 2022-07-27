import knex from 'knex'

exports.seed = async function (knex: knex) {
  return knex('petshops_services').insert([
    {
      petshops_id: 1,
      pets_id: 1,
      name: 'Banho e Tosa',
      description:
        'Será feito a tosa pela Carolina, que trabalha com muita dedicação e carinho com os animais, e o banho pelo Fabio, muito cuidadoso e atencioso',
      scheduling_date: '2022-07-28 12:00:00',
      duration: '45 minutos',
      total_amount: '249.99',
      amount_already_paid: true,
    },
    {
      petshops_id: 2,
      pets_id: 2,
      name: 'Banho e Tosa',
      description:
        'Será feito a tosa pelo Carlos, que trabalha com muita dedicação e carinho com os animais, e o banho pela Bruna, muito cuidadosa e atenciosa',
      scheduling_date: '2022-08-01 14:00:00',
      duration: '35 minutos',
      total_amount: '180.00',
      amount_already_paid: false,
    },
  ])
}
