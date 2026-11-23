import { createContext, useContext } from 'react'

export const LightboxContext = createContext(null)

export function useLightbox() {
  return useContext(LightboxContext)
}
