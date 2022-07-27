import knex from '../../../main/config/database'
import { Petshop } from './../../../domain/models/petshop/petshop'
import { ILoadPetshops } from './../../../domain/use-cases/petshop/load-petshops'

export class LoadPetshops implements ILoadPetshops {
  async show(): Promise<Petshop[]> {
    return await knex('petshops').select('*')
  }
}
