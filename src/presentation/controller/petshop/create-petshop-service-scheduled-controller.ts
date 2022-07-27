import { Controller } from '../../protocols/controller'
import { create } from '../../../main/utils/api-response'
import { HttpRequest } from '../../../presentation/protocols/http'
import { ICreatePetshopServiceScheduled } from './../../../domain/use-cases/petshop/create-petshop-service-scheduled'

export class CreatePetshopServiceScheduledController implements Controller {
  constructor(private readonly createPetshopServiceScheduled: ICreatePetshopServiceScheduled) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const petshopServiceScheduled = httpRequest.body

      await this.createPetshopServiceScheduled.store(petshopServiceScheduled)

      return create()
    } catch (error) {
      console.log(error)
    }
  }
}
