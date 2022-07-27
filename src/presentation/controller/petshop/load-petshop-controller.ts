import { Controller } from '../../protocols/controller'
import { notFound, ok, serverError } from '../../../main/utils/api-response'
import { HttpRequest } from '../../../presentation/protocols/http'
import { ILoadPetshop } from './../../../domain/use-cases/petshop/load-petshop'

export class LoadPetshopController implements Controller {
  constructor(private readonly loadPetshop: ILoadPetshop) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const { id }: { id: number } = httpRequest.params

      const result = await this.loadPetshop.show(id)

      if (!result) return notFound('id', 'petshop not found')

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
