import ProductCard from '../product-card/ProductCard'
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles.jsx'

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title}</Title>
      </h2>
      <Preview>
        {products
          // filter out anything but the first 4
          // we will get "product" -- which we are going to ignor by using "_," mean we are not going to use it
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
