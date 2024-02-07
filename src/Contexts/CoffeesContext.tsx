// CartContext.tsx

import { createContext, useState } from 'react'

export interface CartItem {
  quantity: number
  id: string
  image: string
  title: string
  price: number
  totalPrice: number
}

export interface CartContextValue {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (item: CartItem) => void
}

export const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: CartItem) {
    setCart([...cart, item])
  }

  function removeFromCart(itemId: string) {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
