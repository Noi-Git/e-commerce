import { Link } from 'react-router-dom'
import ProductCard from '../product-card/ProductCard'
import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products
          // filter out anything but the first 4
          // we will get "product" -- which we are going to ignor by using "_," mean we are not going to use it
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default CategoryPreview
