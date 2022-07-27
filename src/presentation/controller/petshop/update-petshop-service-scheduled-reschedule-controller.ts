import { Controller } from '../../protocols/controller'
import { create, serverError } from '../../../main/utils/api-response'
import { HttpRequest } from '../../../presentation/protocols/http'
import { IUpdatePetshopServiceScheduledReschedule } from './../../../domain/use-cases/petshop/update-petshop-service-scheduled-reschedule'

export class UpdatePetshopServiceScheduledRescheduleController implements Controller {
  constructor(private readonly updatePetshopServiceScheduledReschedule: IUpdatePetshopServiceScheduledReschedule) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const petshopServiceScheduled = httpRequest.body

      await this.updatePetshopServiceScheduledReschedule.update(petshopServiceScheduled)

      return create()
    } catch (error) {
      return serverError(error)
    }
  }
}
