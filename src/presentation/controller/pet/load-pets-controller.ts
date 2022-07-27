import { Controller } from '../../protocols/controller'
import { ok, serverError } from '../../../main/utils/api-response'
import { ILoadPets } from './../../../domain/use-cases/pet/load-pets'

export class LoadPetsController implements Controller {
  constructor(private readonly loadPets: ILoadPets) {}

  async handle() {
    try {
      const result = await this.loadPets.show()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
