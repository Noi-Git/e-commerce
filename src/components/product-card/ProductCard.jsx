import React from 'react'
import Button from '../button/Button'
import './product-card.styles.scss'

// const ProductCard = ({product}) => { //data in {product} comes from mock data
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>Add to Card </Button>
    </div>
  )
}

export default ProductCard
