import { LoadPets } from '../../../../data/use-cases/pet/load-pets'
import { LoadPetsController } from '../../../../presentation/controller/pet/load-pets-controller'
import { Controller } from '../../../../presentation/protocols'

export function loadPetsControllerFactory(): Controller {
  const loadPets = new LoadPets()
  return new LoadPetsController(loadPets)
}
