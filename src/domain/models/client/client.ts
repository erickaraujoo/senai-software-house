import { Pets } from '../pets/pets'

export interface Client {
  id: number
  name: string
  phone: string
  email: string
  age: number
  created_at: Date
  updated_at: Date
}

export interface ClientAndPets {
  id: number
  name: string
  phone: string
  email: string
  age: number
  created_at: Date
  updated_at: Date
  pets: Pets[]
}
