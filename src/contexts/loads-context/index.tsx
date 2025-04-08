import { createContext, PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react'
import { LoadsContextProps } from './types'
import { useLoadsData } from '@/hooks/useLoadsData'
import { filterLoads } from '@/utils/loads-context/filter-loads'
import { calculateTotalPages } from '@/utils/loads-context/calculate-total-pages'
import { paginateLoads } from '@/utils/loads-context/paginate-loads'

const ITEMS_PER_PAGE = 10

const LoadsContext = createContext<LoadsContextProps>({
  loads: [],
  isLoading: false,
  error: null,
  deleteLoad: () => {},
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: () => {},
  paginatedLoads: [],
  searchQuery: '',
  setSearchQuery: () => {},
})

export const LoadsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { loads, isLoading, error, setLoads } = useLoadsData()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const deleteLoad = (id: number) => {
    setLoads(prevLoads => prevLoads.filter(load => load.id !== id))
  }

  const filteredLoads = useMemo(() => 
    filterLoads(loads, searchQuery),
    [loads, searchQuery]
  )

  const totalPages = useMemo(() => 
    calculateTotalPages(filteredLoads.length, ITEMS_PER_PAGE),
    [filteredLoads.length]
  )

  const paginatedLoads = useMemo(() => 
    paginateLoads(filteredLoads, currentPage, ITEMS_PER_PAGE),
    [filteredLoads, currentPage]
  )

  // Reset current page when search query changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  const value = useMemo(
    () => ({
      loads: filteredLoads,
      isLoading,
      error,
      deleteLoad,
      currentPage,
      totalPages,
      setCurrentPage,
      paginatedLoads,
      searchQuery,
      setSearchQuery,
    }),
    [filteredLoads, isLoading, error, currentPage, totalPages, paginatedLoads, searchQuery]
  )

  return (
    <LoadsContext.Provider value={value}>{children}</LoadsContext.Provider>
  )
}

export const useLoadsContext = () => {
  return useContext(LoadsContext)
} 