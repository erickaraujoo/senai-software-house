import { Pet } from '../pet/pet'

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
  pets: Pet[]
}
