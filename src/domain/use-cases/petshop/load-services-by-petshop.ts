import { PetshopAndServices } from '../../models/petshop/petshop'

export interface ILoadServicesByPetshop {
  show(id: number): Promise<PetshopAndServices>
}
