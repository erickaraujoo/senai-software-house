export interface PetshopServiceScheduled {
  id: number
  petshops_services_id: number
  pets_id: number
  scheduling_date: Date
  amount_already_paid: boolean
  created_at: Date
  updated_at: Date
  finished_at: Date | null
}
