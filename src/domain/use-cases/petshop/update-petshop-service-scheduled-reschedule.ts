import { PetshopServiceScheduledReschedule } from '../../models/petshop/petshop-service-scheduled'

export interface IUpdatePetshopServiceScheduledReschedule {
  update(petshopServiceScheduled: PetshopServiceScheduledReschedule): Promise<number>
}
