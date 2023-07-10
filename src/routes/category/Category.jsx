import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context'

import './category.styles.scss'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
}

export default Category
