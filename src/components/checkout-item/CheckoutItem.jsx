import { useContext } from 'react'
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quality,
  Arrow,
  Value,
  Remove,
} from './checkout-item.styles.jsx'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quality>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quality>
      <BaseSpan>{price}</BaseSpan>
      <Remove onClick={clearItemHandler}>&#10005;</Remove>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
