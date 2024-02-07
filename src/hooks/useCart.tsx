import { useContext } from 'react'

import { CartContext } from '../Contexts/CoffeesContext'

export function useCart() {
  return useContext(CartContext)
}
