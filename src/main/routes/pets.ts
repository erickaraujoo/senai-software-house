import { Router } from 'express'
import { adaptRoute } from '../adapters/adapt-route'
import { loadPetsControllerFactory } from './../factories/controller/pet/load-pets-controller-factory'
import { loadPetControllerFactory } from './../factories/controller/pet/load-pet-controller-factory'

export default (routes: Router) => {
  routes.get('/pets', adaptRoute(loadPetsControllerFactory()))
  routes.get('/pets/:id', adaptRoute(loadPetControllerFactory()))
}
