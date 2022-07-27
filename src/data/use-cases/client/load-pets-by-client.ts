import knex from '../../../main/config/database'
import { ILoadPetsByClient } from './../../../domain/use-cases/client/load-pets-by-client'
import { Pet } from '../../../domain/models/pet/pet'
import { ClientAndPets } from '@domain/models/client/client'

export class LoadPetsByClient implements ILoadPetsByClient {
  async show(id: number): Promise<ClientAndPets> {
    const clientAndPets = await knex('clients')
      .join('clients_pets', 'clients.id', 'clients_pets.clients_id')
      .join('pets', 'clients_pets.pets_id', 'pets.id')
      .select({
        client_id: 'clients.id',
        client_name: 'clients.name',
        client_phone: 'clients.phone',
        client_email: 'clients.email',
        client_age: 'clients.age',
        client_created_at: 'clients.created_at',
        client_updated_at: 'clients.updated_at',
        pet_id: 'pets.id',
        pet_name: 'pets.name',
        pet_age: 'pets.age',
        pet_weight: 'pets.weight',
        pet_breed: 'pets.breed',
        pet_species: 'pets.species',
        pet_appearance: 'pets.appearance',
        pet_created_at: 'pets.created_at',
        pet_updated_at: 'pets.updated_at',
      })
      .where('clients.id', id)

    if (!clientAndPets || (clientAndPets && !clientAndPets.length)) return null

    const client = {
      id: clientAndPets[0].client_id,
      name: clientAndPets[0].client_name,
      phone: clientAndPets[0].client_phone,
      email: clientAndPets[0].client_email,
      age: clientAndPets[0].client_age,
      created_at: clientAndPets[0].client_created_at,
      updated_at: clientAndPets[0].client_updated_at,
    }

    const pets: Pet[] = []

    await Promise.all(
      clientAndPets.map(async (row) => {
        pets.push({
          id: row.pet_id,
          name: row.pet_name,
          age: row.pet_age,
          weight: row.pet_weight,
          breed: row.pet_breed,
          species: row.pet_species,
          appearance: row.pet_appearance,
          created_at: row.pet_created_at,
          updated_at: row.pet_updated_at,
        })
      })
    )

    return { ...client, pets }
  }
}
