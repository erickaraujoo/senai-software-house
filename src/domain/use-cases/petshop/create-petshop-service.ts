import { PetshopService } from '../../models/petshop/petshop-service'

export interface ICreatePetshopService {
  store(petshopService: PetshopService): Promise<number[]>
}
