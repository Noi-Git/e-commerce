import React from 'react'
import Button from '../button/Button'
import './product-card.styles.scss'

const ProductCard = () => {
  return (
    <div className='product-card-container'>
      <img />
      <div className='footer'>
        <span className='name'></span>
        <span className='price'></span>
      </div>
      <Button buttonType='inverted'>Add to Card </Button>
    </div>
  )
}

export default ProductCard
