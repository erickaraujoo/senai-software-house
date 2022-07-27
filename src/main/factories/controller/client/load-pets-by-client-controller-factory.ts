import { Controller } from '../../../../presentation/protocols'
import { LoadPetsByClient } from './../../../../data/use-cases/client/load-pets-by-client'
import { LoadPetsByClientController } from './../../../../presentation/controller/client/load-pets-by-client-controller'

export function loadPetsByClientControllerFactory(): Controller {
  const loadPetsByClient = new LoadPetsByClient()
  return new LoadPetsByClientController(loadPetsByClient)
}
