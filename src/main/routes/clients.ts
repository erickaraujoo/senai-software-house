import { Router } from 'express'
import { adaptRoute } from '../adapters/adapt-route'

import { loadClientsControllerFactory } from '../factories/controller/client/load-clients-controller-factory'
import { createClientControllerFactory } from '../factories/controller/client/create-client-controller-factory'
import { loadClientControllerFactory } from '../factories/controller/client/load-client-controller-factory'
import { loadPetsByClientControllerFactory } from './../factories/controller/client/load-pets-by-client-controller-factory'

export default (routes: Router) => {
  routes.get('/clients', adaptRoute(loadClientsControllerFactory()))
  routes.post('/clients', adaptRoute(createClientControllerFactory()))

  routes.get('/clients/:id', adaptRoute(loadClientControllerFactory()))

  routes.get('/clients/:id/pets', adaptRoute(loadPetsByClientControllerFactory()))
}
