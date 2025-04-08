'use client'

import { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { LoadsContextProps } from './types'

const LoadsContext = createContext<LoadsContextProps>({
  loads: []
})

export const LoadsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const value = useMemo(
    () => ({
      loads: []
    }),
    []
  )

  return (
    <LoadsContext.Provider value={value}>{children}</LoadsContext.Provider>
  )
}

export const useLoadsContext = () => {
  return useContext(LoadsContext)
}
