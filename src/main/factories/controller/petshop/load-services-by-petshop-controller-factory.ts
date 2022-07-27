import { Controller } from '../../../../presentation/protocols'
import { LoadServicesByPetshopController } from './../../../../presentation/controller/petshop/load-services-by-petshop-controller'
import { LoadServicesByPetshop } from './../../../../data/use-cases/petshop/load-services-by-petshop'

export function loadServicesByPetshopControllerFactory(): Controller {
  const loadServiceByPetshop = new LoadServicesByPetshop()
  return new LoadServicesByPetshopController(loadServiceByPetshop)
}
