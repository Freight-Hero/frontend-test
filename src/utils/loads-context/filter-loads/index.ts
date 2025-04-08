import { Load } from "@/types/load"

export const filterLoads = (loads: Load[], searchQuery: string): Load[] => {
  if (!searchQuery) return loads

  // Check if the search query is a status filter
  if (searchQuery.startsWith('status:')) {
    const status = searchQuery.replace('status:', '').toLowerCase()
    return loads.filter(load => load.status.toLowerCase() === status)
  }

  // Regular search across all fields
  return loads.filter(load => 
    load.id.toString().includes(searchQuery) ||
    load.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
    load.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    load.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    load.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    load.carrier_name.toLowerCase().includes(searchQuery.toLowerCase())
  )
}