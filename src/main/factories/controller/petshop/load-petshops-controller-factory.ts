import { LoadPetshopsController } from '../../../../presentation/controller/petshop/load-petshops-controller'
import { Controller } from '../../../../presentation/protocols'
import { LoadPetshops } from '../../../../data/use-cases/petshop/load-petshops'

export function loadPetshopsControllerFactory(): Controller {
  const loadPetshops = new LoadPetshops()
  return new LoadPetshopsController(loadPetshops)
}
