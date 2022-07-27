import { Controller } from '../../protocols/controller'
import { ok, serverError } from '../../../main/utils/api-response'
import { ILoadPetshops } from './../../../domain/use-cases/petshop/load-petshops'

export class LoadPetshopsController implements Controller {
  constructor(private readonly loadPetshops: ILoadPetshops) {}

  async handle() {
    try {
      const result = await this.loadPetshops.show()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
