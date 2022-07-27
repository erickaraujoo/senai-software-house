import { Pet } from '../../models/pet/pet'

export interface ILoadPets {
  show(): Promise<Pet[]>
}
