import { PetshopService } from './petshop-service'

export interface Petshop {
  id: number
  company_name: string
  created_at: Date
  updated_at: Date
}

export interface PetshopAndServices {
  id: number
  company_name: string
  created_at: Date
  updated_at: Date
  services: PetshopService[]
}
