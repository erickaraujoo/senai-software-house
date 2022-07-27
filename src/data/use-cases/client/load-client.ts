import { Client } from '../../../domain/models/client/client'
import { ILoadClient } from '../../../domain/use-cases/client/load-client'
import knex from '../../../main/config/database'

export class LoadClient implements ILoadClient {
  async show(id: number): Promise<Client> {
    return await knex('clients').select('*').where({ id }).first()
  }
}
