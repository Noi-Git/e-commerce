import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItes } = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItes.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Checkout</Button>
    </div>
  )
}

export default CartDropdown
