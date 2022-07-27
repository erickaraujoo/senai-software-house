import { Controller } from '../../../../presentation/protocols'
import { CreatePetshopService } from './../../../../data/use-cases/petshops/create-petshop-service'
import { CreatePetshopServiceController } from './../../../../presentation/controller/petshop/create-petshop-service-controller'

export function createPetshopServiceControllerFactory(): Controller {
  const createPetshopService = new CreatePetshopService()
  return new CreatePetshopServiceController(createPetshopService)
}
