import { createContext, PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react'
import { LoadsContextProps } from './types'
import { Load } from '@/types/load'

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
  const [loads, setLoads] = useState<Load[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchLoads = async () => {
      try {
        /** Add fake delay to simulate loading */
        await new Promise(resolve => setTimeout(resolve, 1500));
        const response = await fetch('/loads-mock.json')
        const data = await response.json()
        setLoads(data.loads)
      } catch (err) {
        setError(err as Error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLoads()
  }, [])

  const deleteLoad = (id: number) => {
    setLoads(prevLoads => prevLoads.filter(load => load.id !== id))
  }

  const filteredLoads = useMemo(() => {
    if (!searchQuery) return loads
    return loads.filter(load => 
      load.id.toString().includes(searchQuery) ||
      load.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      load.carrier_name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [loads, searchQuery])

  const totalPages = Math.ceil(filteredLoads.length / ITEMS_PER_PAGE)
  const paginatedLoads = filteredLoads.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
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