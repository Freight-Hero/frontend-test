import { Load } from "@/types/load"

export const filterLoads = (loads: Load[], searchQuery: string, statusFilter: string): Load[] => {
  let filteredLoads = loads

  if (statusFilter) {
    filteredLoads = filteredLoads.filter(load => load.status.toLowerCase() === statusFilter.toLowerCase())
  }

  if (searchQuery) {
    filteredLoads = filteredLoads.filter(load => 
      load.id.toString().includes(searchQuery) ||
      load.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.carrier_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return filteredLoads
}