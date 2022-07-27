import { Controller } from '../../../../presentation/protocols'
import { CreatePetshopServiceScheduled } from '../../../../data/use-cases/petshop/create-petshop-service-scheduled'
import { CreatePetshopServiceScheduledController } from './../../../../presentation/controller/petshop/create-petshop-service-scheduled-controller'

export function createPetshopServiceScheduledControllerFactory(): Controller {
  const createPetshopServiceScheduled = new CreatePetshopServiceScheduled()
  return new CreatePetshopServiceScheduledController(createPetshopServiceScheduled)
}
