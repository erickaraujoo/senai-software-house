import knex from 'knex'

exports.seed = async function (knex: knex) {
  return knex('pets').insert([
    {
      name: 'Spike',
      age: 8,
      weight: 32.4,
      breed: 'Pastor-alemão',
      species: 'Cachorro',
      appearance: 'Pelagem preta, com marcas marrom-acaju. Olhos amendoados, extremamente escuros, com a expressão muito alerta',
    },
    {
      name: 'Amora',
      age: 6,
      weight: 3.6,
      breed: 'Ragdoll',
      species: 'Gato',
      appearance: 'Pelo de tamanho médio a comprido, espesso e muito suave, cauda comprida e muita espessa',
    },
  ])
}
