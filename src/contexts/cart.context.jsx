import { createContext, useEffect, useState } from 'react'

/* === shape of item in the cart ===
{id, name, price, imageUrl, quantity}
*/

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find the item in the cart we want to remove
  //check if quantity === 1, yes, remove the item from cart
  //if quantity !== 1, return the item with reduced quantity
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [], //store items to cart-context when it is added
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0, //show count when cart item changed
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems]) //re-render every time the cartItems changed

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(addCartItem(cartItems, cartItemToRemove))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
