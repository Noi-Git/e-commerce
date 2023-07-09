import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getCategoryMap = async () => {
      //this is the correct way to use async inside useEffect
      const categoryMap = await getCategoriesAndDocuments('categories')
      console.log(categoryMap)
    }
    getCategoryMap()
  }, [])

  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
