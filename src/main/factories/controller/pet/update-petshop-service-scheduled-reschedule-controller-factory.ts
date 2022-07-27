import { Controller } from '../../../../presentation/protocols'
import { UpdatePetshopServiceScheduledReschedule } from './../../../../data/use-cases/petshop/update-petshop-service-scheduled-reschedule'
import { UpdatePetshopServiceScheduledRescheduleController } from './../../../../presentation/controller/petshop/update-petshop-service-scheduled-reschedule-controller'

export function updatePetshopServiceScheduleRescheduleFactory(): Controller {
  const updatePetshopServiceScheduledReschedule = new UpdatePetshopServiceScheduledReschedule()
  return new UpdatePetshopServiceScheduledRescheduleController(updatePetshopServiceScheduledReschedule)
}
