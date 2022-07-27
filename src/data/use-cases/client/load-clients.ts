import { Client } from '../../../domain/models/client/client'
import { ILoadClients } from '../../../domain/use-cases/client/load-clients'
import knex from '../../../main/config/database'

export class LoadClients implements ILoadClients {
  async show(): Promise<Client[]> {
    return await knex('clients').select('*')
  }
}
