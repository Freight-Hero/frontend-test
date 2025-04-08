'use client'

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
})

export const LoadsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loads, setLoads] = useState<Load[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchLoads = async () => {
      try {
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

  const totalPages = Math.ceil(loads.length / ITEMS_PER_PAGE)
  const paginatedLoads = loads.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const value = useMemo(
    () => ({
      loads,
      isLoading,
      error,
      deleteLoad,
      currentPage,
      totalPages,
      setCurrentPage,
      paginatedLoads,
    }),
    [loads, isLoading, error, currentPage, totalPages, paginatedLoads]
  )

  return (
    <LoadsContext.Provider value={value}>{children}</LoadsContext.Provider>
  )
}

export const useLoadsContext = () => {
  return useContext(LoadsContext)
} 