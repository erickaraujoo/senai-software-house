import { loadClientsControllerFactory } from '../factories/controller/client/load-clients-controller-factory'
import { loadClientControllerFactory } from '../factories/controller/client/load-client-controller-factory'
import { createClientControllerFactory } from '../factories/controller/client/create-client-controller-factory'
import { Router } from 'express'
import { adaptRoute } from '../adapters/adapt-route'

export default (routes: Router) => {
  routes.get('/clients', adaptRoute(loadClientsControllerFactory()))
  routes.get('/clients/:id', adaptRoute(loadClientControllerFactory()))
  routes.post('/clients', adaptRoute(createClientControllerFactory()))
}
