import { Controller } from '../../protocols/controller'
import { ok, serverError } from '../../../main/utils/api-response'
import { HttpRequest } from '../../../presentation/protocols/http'
import { ILoadPetsByClient } from './../../../domain/use-cases/client/load-pets-by-client'

export class LoadPetsByClientController implements Controller {
  constructor(private readonly loadPetsByClient: ILoadPetsByClient) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const { id }: { id: number } = httpRequest.params

      const result = await this.loadPetsByClient.show(id)

      if (!result) return ok()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
