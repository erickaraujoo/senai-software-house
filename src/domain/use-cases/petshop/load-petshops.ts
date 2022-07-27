import { Petshop } from './../../models/petshop/petshop'

export interface ILoadPetshops {
  show(): Promise<Petshop[]>
}
