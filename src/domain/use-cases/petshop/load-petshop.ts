import { Petshop } from './../../models/petshop/petshop'

export interface ILoadPetshop {
  show(id: number): Promise<Petshop>
}
