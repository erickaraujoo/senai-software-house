import { Controller } from '../../protocols/controller'
import { ok, serverError } from '../../../main/utils/api-response'
import { ILoadClients } from '../../../domain/use-cases/client/load-clients'

export class LoadClientsController implements Controller {
  constructor(private readonly loadClients: ILoadClients) {}

  async handle() {
    try {
      const result = await this.loadClients.show()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
