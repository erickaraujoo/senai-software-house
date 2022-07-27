import knex from '../../../main/config/database'
import { PetshopServiceScheduled } from '../../../domain/models/petshop/petshop-service-scheduled'
import { ICreatePetshopServiceScheduled } from '../../../domain/use-cases/petshop/create-petshop-service-scheduled'

export class CreatePetshopServiceScheduled implements ICreatePetshopServiceScheduled {
  async store({
    petshops_services_id,
    pets_id,
    scheduling_date,
    amount_already_paid,
    finished_at,
  }: PetshopServiceScheduled): Promise<number[]> {
    return await knex('petshops_services_scheduled').insert({
      petshops_services_id,
      pets_id,
      scheduling_date,
      amount_already_paid,
      finished_at,
    })
  }
}
