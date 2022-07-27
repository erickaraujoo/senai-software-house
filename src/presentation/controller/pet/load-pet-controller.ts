import { Controller } from '../../protocols/controller'
import { notFound, ok, serverError } from '../../../main/utils/api-response'
import { HttpRequest } from '../../../presentation/protocols/http'
import { ILoadPet } from './../../../domain/use-cases/pet/load-pet'

export class LoadPetController implements Controller {
  constructor(private readonly loadPet: ILoadPet) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const { id }: { id: number } = httpRequest.params

      const result = await this.loadPet.show(id)

      if (!result) return notFound('id', 'pet not found')

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
