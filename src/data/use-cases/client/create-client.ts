import { ClientAndPets } from '../../../domain/models/client/client'
import { ICreateClient } from '../../../domain/use-cases/client/create-client'
import knex from '../../../main/config/database'
import { Pet } from '../../../domain/models/pet/pet'

export class CreateClient implements ICreateClient {
  async store({ name, phone, email, age, pets }: ClientAndPets): Promise<number[]> {
    const clients_id = await knex('clients').insert({ name, phone, email, age })

    if (pets && pets.length) {
      pets.map(async ({ name, age, weight, breed, species, appearance }: Pet) => {
        const pets_id = await knex('pets').insert({ name, age, weight, breed, species, appearance })

        await knex('clients_pets').insert({ clients_id, pets_id })
      })
    }

    return clients_id
  }
}
