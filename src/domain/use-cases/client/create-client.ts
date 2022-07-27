import { ClientAndPets } from '../../models/client/client'

export interface ICreateClient {
  store(client: ClientAndPets): Promise<number[]>
}
