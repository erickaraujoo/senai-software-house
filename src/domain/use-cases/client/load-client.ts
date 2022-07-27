import { Client } from '../../models/client/client'

export interface ILoadClient {
  show(id: number): Promise<Client>
}
