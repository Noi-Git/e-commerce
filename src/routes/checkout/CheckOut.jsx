import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const CheckOut = () => {
  const { cartItems } = useContext(CartContext)

  return <div>CheckOut</div>
}

export default CheckOut
