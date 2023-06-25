// import SHOP_DATA from '../../shop-data.json'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products.context'
import ProductCard from '../../components/product-card/ProductCard'

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Shop
