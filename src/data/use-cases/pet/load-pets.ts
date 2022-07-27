import { Pet } from '../../../domain/models/pet/pet'
import { ILoadPets } from '../../../domain/use-cases/pet/load-pets'
import knex from '../../../main/config/database'

export class LoadPets implements ILoadPets {
  async show(): Promise<Pet[]> {
    return await knex('pets').select('*')
  }
}
