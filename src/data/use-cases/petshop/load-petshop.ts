import knex from '../../../main/config/database'
import { Petshop } from './../../../domain/models/petshop/petshop'
import { ILoadPetshop } from './../../../domain/use-cases/petshop/load-petshop'

export class LoadPetshop implements ILoadPetshop {
  async show(id: number): Promise<Petshop> {
    return await knex('petshops').select('*').where({ id }).first()
  }
}
