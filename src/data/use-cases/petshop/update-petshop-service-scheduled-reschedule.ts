import knex from '../../../main/config/database'
import { PetshopServiceScheduledReschedule } from '../../../domain/models/petshop/petshop-service-scheduled'
import { IUpdatePetshopServiceScheduledReschedule } from './../../../domain/use-cases/petshop/update-petshop-service-scheduled-reschedule'

export class UpdatePetshopServiceScheduledReschedule implements IUpdatePetshopServiceScheduledReschedule {
  async update({ id, scheduling_date }: PetshopServiceScheduledReschedule): Promise<number> {
    return await knex('petshops_services_scheduled').update({ scheduling_date }).where({ id })
  }
}
