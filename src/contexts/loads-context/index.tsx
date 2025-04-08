'use client'

import { createContext, PropsWithChildren, useContext, useMemo, useState, useEffect } from 'react'
import { LoadsContextProps } from './types'
import { Load } from '@/types/load'

const LoadsContext = createContext<LoadsContextProps>({
  loads: [],
  isLoading: false,
  error: null,
  deleteLoad: () => {},
})

export const LoadsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loads, setLoads] = useState<Load[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

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

  const value = useMemo(
    () => ({
      loads,
      isLoading,
      error,
      deleteLoad,
    }),
    [loads, isLoading, error]
  )

  return (
    <LoadsContext.Provider value={value}>{children}</LoadsContext.Provider>
  )
}

export const useLoadsContext = () => {
  return useContext(LoadsContext)
}
