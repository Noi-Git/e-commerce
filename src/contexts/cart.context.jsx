import { createContext, useState } from 'react'

/* === shape of item in the cart ===
{id, name, price, imageUrl, quantity}
*/

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [], //store items to cart-context when it is added
  addItemToCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const value = { isCartOpen, setIsCartOpen }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
