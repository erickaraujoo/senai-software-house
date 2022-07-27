import { LoadPetshopController } from './../../../../presentation/controller/petshop/load-petshop-controller'
import { Controller } from '../../../../presentation/protocols'
import { LoadPetshop } from './../../../../data/use-cases/petshop/load-petshop'

export function loadPetshopControllerFactory(): Controller {
  const loadPetshop = new LoadPetshop()
  return new LoadPetshopController(loadPetshop)
}
