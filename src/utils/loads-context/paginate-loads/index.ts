import { Load } from "@/types/load"

export const paginateLoads = (loads: Load[], currentPage: number, itemsPerPage: number) => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return loads.slice(startIndex, endIndex)
}