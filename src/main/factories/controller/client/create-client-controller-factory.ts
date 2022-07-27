import { Controller } from '../../../../presentation/protocols'
import { CreateClient } from '../../../../data/use-cases/client/create-client'
import { CreateClientController } from '../../../../presentation/controller/client/create-client-controller'

export function createClientControllerFactory(): Controller {
  const createClient = new CreateClient()
  return new CreateClientController(createClient)
}
