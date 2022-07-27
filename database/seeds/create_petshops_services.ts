import knex from 'knex'

exports.seed = async function (knex: knex) {
  return knex('petshops_services').insert([
    {
      petshops_id: 1,
      name: 'Banho e Tosa',
      description:
        'Será feito a tosa pela Carolina, que trabalha com muita dedicação e carinho com os animais, e o banho pelo Fabio, muito cuidadoso e atencioso',
      duration: '45 minutos',
      total_amount: '249.99',
    },
    {
      petshops_id: 1,
      name: 'Máscaras e carding',
      description:
        'Será feito a máscara pelo Carlos, que trabalha com muita dedicação e carinho com os animais, e o carding pela Bruna, muito cuidadosa e atenciosa',
      duration: '35 minutos',
      total_amount: '180.00',
    },
  ])
}
