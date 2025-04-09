import { Load } from '@/types/load'
import { SortConfig } from '@/types/sorting'

export const sortLoads = (loads: Load[], sortConfig: SortConfig<Load>): Load[] => {
  return [...loads].sort((a, b) => {
    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (aValue === bValue) return 0

    const direction = sortConfig.direction === 'asc' ? 1 : -1

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.localeCompare(bValue) * direction
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return (aValue - bValue) * direction
    }

    return 0
  })
} 