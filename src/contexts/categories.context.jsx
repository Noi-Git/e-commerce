import { createContext, useState, useEffect } from 'react'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
  categoryMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoryMap = async () => {
      //this is the correct way to use async inside useEffect
      const categoryMap = await getCategoriesAndDocuments('categories')
      // console.log(categoryMap)

      setCategoriesMap(categoryMap)
    }
    getCategoryMap()
  }, [])

  const value = { categoriesMap }

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
