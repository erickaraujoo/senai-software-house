import { Pet } from '../../../domain/models/pet/pet'
import { ILoadPet } from './../../../domain/use-cases/pet/load-pet'
import knex from '../../../main/config/database'

export class LoadPet implements ILoadPet {
  async show(id: number): Promise<Pet> {
    return await knex('pets').select('*').where({ id }).first()
  }
}
