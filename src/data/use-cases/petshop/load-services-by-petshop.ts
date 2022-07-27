import knex from '../../../main/config/database'
import { ILoadServicesByPetshop } from './../../../domain/use-cases/petshop/load-services-by-petshop'
import { PetshopAndServices } from '@domain/models/petshop/petshop'
import { PetshopService } from './../../../domain/models/petshop/petshop-service'

export class LoadServicesByPetshop implements ILoadServicesByPetshop {
  async show(id: number): Promise<PetshopAndServices> {
    const petshopAndServices = await knex('petshops')
      .join('petshops_services', 'petshops.id', 'petshops_services.petshops_id')
      .select({
        petshop_id: 'petshops.id',
        petshop_company_name: 'petshops.company_name',
        petshop_created_at: 'petshops.created_at',
        petshop_updated_at: 'petshops.updated_at',
        petshops_services_id: 'petshops_services.id',
        petshops_services_name: 'petshops_services.name',
        petshops_services_description: 'petshops_services.description',
        petshops_services_duration: 'petshops_services.duration',
        petshops_services_total_amount: 'petshops_services.total_amount',
        petshops_services_created_at: 'petshops_services.created_at',
        petshops_services_updated_at: 'petshops_services.updated_at',
      })
      .where('petshops.id', id)

    if (!petshopAndServices || (petshopAndServices && !petshopAndServices.length)) return null

    const petshop = {
      id: petshopAndServices[0].petshop_id,
      company_name: petshopAndServices[0].petshop_company_name,
      created_at: petshopAndServices[0].petshop_created_at,
      updated_at: petshopAndServices[0].petshop_updated_at,
    }

    const services: PetshopService[] = []

    await Promise.all(
      petshopAndServices.map(async (row) => {
        services.push({
          id: row.petshops_services_id,
          name: row.petshops_services_name,
          description: row.petshops_services_description,
          duration: row.petshops_services_duration,
          total_amount: row.petshops_services_total_amount,
          created_at: row.petshops_services_created_at,
          updated_at: row.petshops_services_updated_at,
        })
      })
    )

    return { ...petshop, services }
  }
}
