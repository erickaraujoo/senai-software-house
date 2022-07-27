import { Controller } from '../../../../presentation/protocols'
import { LoadPet } from './../../../../data/use-cases/pet/load-pet'
import { LoadPetController } from './../../../../presentation/controller/pet/load-pet-controller'

export function loadPetControllerFactory(): Controller {
  const loadPet = new LoadPet()
  return new LoadPetController(loadPet)
}
