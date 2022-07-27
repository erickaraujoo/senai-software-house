import { Controller } from '../../protocols/controller'
import { create, ok } from '../../../main/utils/api-response'
import { ICreateClient } from './../../../domain/use-cases/client/create-client'
import { HttpRequest } from '../../../presentation/protocols/http'

export class CreateClientController implements Controller {
  constructor(private readonly createClient: ICreateClient) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const client = httpRequest.body

      await this.createClient.store(client)

      return create()
    } catch (error) {
      console.log(error)
    }
  }
}
