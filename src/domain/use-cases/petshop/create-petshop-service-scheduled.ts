import { PetshopServiceScheduled } from '../../models/petshop/petshop-service-scheduled'

export interface ICreatePetshopServiceScheduled {
  store(petshopServiceScheduled: PetshopServiceScheduled): Promise<number[]>
}
