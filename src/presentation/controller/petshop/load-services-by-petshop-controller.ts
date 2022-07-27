import { Controller } from '../../protocols/controller'
import { ok, serverError } from '../../../main/utils/api-response'
import { HttpRequest } from '../../../presentation/protocols/http'
import { ILoadServicesByPetshop } from './../../../domain/use-cases/petshop/load-services-by-petshop'

export class LoadServicesByPetshopController implements Controller {
  constructor(private readonly loadServicesByPetshop: ILoadServicesByPetshop) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const { id }: { id: number } = httpRequest.params

      const result = await this.loadServicesByPetshop.show(id)

      if (!result) return ok()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
