import { Router } from 'express'
import { adaptRoute } from '../adapters/adapt-route'
import { createPetshopServiceControllerFactory } from './../factories/controller/petshop/create-petshop-service-controller-factory'
import { createPetshopServiceScheduledControllerFactory } from './../factories/controller/petshop/create-petshop-service-scheduled-controller-factory'
import { loadPetshopsControllerFactory } from './../factories/controller/petshop/load-petshops-controller-factory'
import { loadPetshopControllerFactory } from './../factories/controller/petshop/load-petshop-controller-factory'
import { loadServicesByPetshopControllerFactory } from './../factories/controller/petshop/load-services-by-petshop-controller-factory'
import { updatePetshopServiceScheduleRescheduleFactory } from './../factories/controller/pet/update-petshop-service-scheduled-reschedule-controller-factory'

export default (routes: Router) => {
  routes.get('/petshops', adaptRoute(loadPetshopsControllerFactory()))
  routes.get('/petshops/:id', adaptRoute(loadPetshopControllerFactory()))

  routes.post('/petshops/services', adaptRoute(createPetshopServiceControllerFactory()))
  routes.post('/petshops/services/scheduled', adaptRoute(createPetshopServiceScheduledControllerFactory()))

  routes.get('/petshops/:id/services', adaptRoute(loadServicesByPetshopControllerFactory()))

  routes.put('/petshops/services/scheduled/reschedule', adaptRoute(updatePetshopServiceScheduleRescheduleFactory()))
}
