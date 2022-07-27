import { PetshopService } from './../../../domain/models/petshop/petshop-service'
import { ICreatePetshopService } from './../../../domain/use-cases/petshop/create-petshop-service'
import knex from '../../../main/config/database'

export class CreatePetshopService implements ICreatePetshopService {
  async store({ petshops_id, name, description, duration, total_amount }: PetshopService): Promise<number[]> {
    return await knex('petshops_services').insert({ petshops_id, name, description, duration, total_amount })
  }
}
