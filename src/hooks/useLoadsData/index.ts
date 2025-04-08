import { useState, useEffect } from 'react'

import { Load } from '@/types/load'

export const useLoadsData = () => {
  const [loads, setLoads] = useState<Load[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchLoads = async () => {
      try {
        /** Add fake delay to simulate loading */
        await new Promise(resolve => setTimeout(resolve, 1500))
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

  return { loads, isLoading, error, setLoads }
} 