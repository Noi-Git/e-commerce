import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import './shop.styles.scss'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((title) => {})}
    </div>
  )
}

export default Shop
