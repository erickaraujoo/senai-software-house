import { LoadClient } from '../../../../data/use-cases/client/load-client'
import { Controller } from '../../../../presentation/protocols'
import { LoadClientController } from './../../../../presentation/controller/client/load-client-controller'

export function loadClientControllerFactory(): Controller {
  const loadClient = new LoadClient()
  return new LoadClientController(loadClient)
}
