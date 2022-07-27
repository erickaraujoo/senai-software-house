import { Router } from 'express'
import { adaptRoute } from '../adapters/adapt-route'
import { createPetshopServiceControllerFactory } from './../factories/controller/petshop/create-petshop-service-controller-factory'
import { createPetshopServiceScheduledControllerFactory } from './../factories/controller/petshop/create-petshop-service-scheduled-controller-factory'

export default (routes: Router) => {
  routes.post('/petshops/services', adaptRoute(createPetshopServiceControllerFactory()))
  routes.post('/petshops/services/scheduled', adaptRoute(createPetshopServiceScheduledControllerFactory()))
}
