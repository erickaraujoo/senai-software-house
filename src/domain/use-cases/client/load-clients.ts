import { Client } from '../../models/client/client'

export interface ILoadClients {
  show(): Promise<Client[]>
}
