import { Controller } from '../../protocols/controller'
import { create } from '../../../main/utils/api-response'
import { HttpRequest } from '../../../presentation/protocols/http'
import { ICreatePetshopService } from './../../../domain/use-cases/petshop/create-petshop-service'

export class CreatePetshopServiceController implements Controller {
  constructor(private readonly createPetshopService: ICreatePetshopService) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const petshopService = httpRequest.body

      await this.createPetshopService.store(petshopService)

      return create()
    } catch (error) {
      console.log(error)
    }
  }
}
