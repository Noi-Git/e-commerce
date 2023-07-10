// import SHOP_DATA from '../../shop-data.json'
import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/ProductCard'
import './shop.styles.scss'

const Shop = () => {
  const {} = useContext(CategoriesContext)
  return (
    <div className='products-container'>
      {/* {categories.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  )
}

export default Shop
