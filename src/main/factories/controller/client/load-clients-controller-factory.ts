import { LoadClients } from '../../../../data/use-cases/client/load-clients'
import { LoadClientsController } from '../../../../presentation/controller/client/load-clients-controller'
import { Controller } from '../../../../presentation/protocols'

export function loadClientsControllerFactory(): Controller {
  const loadClients = new LoadClients()
  return new LoadClientsController(loadClients)
}
