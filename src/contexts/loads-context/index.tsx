import { createContext, PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react'

import { LoadsContextProps } from './types'

import { useLoadsData } from '@/hooks/useLoadsData'
import { Load } from '@/types/load'
import { SortConfig } from '@/types/sorting'
import { calculateTotalPages } from '@/utils/loads-context/calculate-total-pages'
import { filterLoads } from '@/utils/loads-context/filter-loads'
import { paginateLoads } from '@/utils/loads-context/paginate-loads'
import { sortLoads } from '@/utils/loads-context/sort-loads'

const ITEMS_PER_PAGE = 10

const LoadsContext = createContext<LoadsContextProps>({
  loads: [],
  isLoading: false,
  error: null,
  deleteLoad: () => { },
  currentPage: 1,
  totalPages: 1,
  setCurrentPage: () => { },
  paginatedLoads: [],
  searchQuery: '',
  setSearchQuery: () => { },
  sortConfig: { key: 'id', direction: 'asc' },
  handleSort: () => { },
  setLoads: () => { },
})

export const LoadsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { loads, isLoading, error, setLoads } = useLoadsData()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortConfig, setSortConfig] = useState<SortConfig<Load>>({ key: 'id', direction: 'asc' })

  const deleteLoad = (id: number) => {
    setLoads(prevLoads => prevLoads.filter(load => load.id !== id))
  }

  const handleSort = (key: keyof Load) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }))
  }

  const filteredLoads = useMemo(() =>
    filterLoads(loads, searchQuery),
    [loads, searchQuery]
  )

  const sortedLoads = useMemo(() =>
    sortLoads(filteredLoads, sortConfig),
    [filteredLoads, sortConfig]
  )

  const totalPages = useMemo(() =>
    calculateTotalPages(sortedLoads.length, ITEMS_PER_PAGE),
    [sortedLoads.length]
  )

  const paginatedLoads = useMemo(() =>
    paginateLoads(sortedLoads, currentPage, ITEMS_PER_PAGE),
    [sortedLoads, currentPage]
  )

  // Reset current page when search query or sort changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, sortConfig])

  const value = useMemo(
    () => ({
      loads: sortedLoads,
      isLoading,
      error,
      deleteLoad,
      currentPage,
      totalPages,
      setCurrentPage,
      paginatedLoads,
      searchQuery,
      setSearchQuery,
      sortConfig,
      handleSort,
      setLoads,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sortedLoads, isLoading, error, currentPage, totalPages, paginatedLoads, searchQuery, sortConfig, setLoads]
  )

  return (
    <LoadsContext.Provider value={value}>{children}</LoadsContext.Provider>
  )
}

export const useLoadsContext = () => {
  return useContext(LoadsContext)
} 