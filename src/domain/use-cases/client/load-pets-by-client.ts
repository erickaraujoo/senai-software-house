import { ClientAndPets } from '../../models/client/client'

export interface ILoadPetsByClient {
  show(id: number): Promise<ClientAndPets>
}
