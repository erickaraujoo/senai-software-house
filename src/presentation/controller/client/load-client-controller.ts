import { Controller } from '../../protocols/controller'
import { notFound, ok, serverError } from '../../../main/utils/api-response'
import { ILoadClient } from '../../../domain/use-cases/client/load-client'
import { HttpRequest } from '../../../presentation/protocols/http'

export class LoadClientController implements Controller {
  constructor(private readonly loadClient: ILoadClient) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const { id }: { id: number } = httpRequest.params

      const result = await this.loadClient.show(id)

      if (!result) return notFound('id', 'client not found')

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
