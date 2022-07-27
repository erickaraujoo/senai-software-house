import knex from 'knex'

exports.seed = async function (knex: knex) {
  return knex('clients').insert([
    {
      name: 'Erick Araujo Barbosa',
      phone: '(11) 94823-1358',
      email: 'araujo.erick2002@gmail.com',
      age: 20,
    },
    {
      name: 'Martin Murilo Gomes',
      phone: '(79) 2764-9578',
      email: 'martin_murilo_gomes@hotmail.co.uk',
      age: 26,
    },
    {
      name: 'Iago Lorenzo Vitor Brito',
      phone: '(11) 94823-1358',
      email: 'iago_brito@brasildakar.com.br',
      age: 33,
    },
    {
      name: 'Marli Sophia Galvão',
      phone: '(68) 2849-1280',
      email: 'marli.sophia.galvao@metododerose.org',
      age: 23,
    },
    {
      name: 'Calebe Jorge Martin Silva',
      phone: '(35) 3958-6847',
      email: 'calebe_jorge_silva@tglaw.com.br',
      age: 29,
    },
  ])
}
