import { Pet } from '../../models/pet/pet'

export interface ILoadPet  {
  show(id: number): Promise<Pet>
}
