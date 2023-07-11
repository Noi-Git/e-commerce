import { createContext, useState, useEffect } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

/* === context ===
  - context is a kind of storage place
*/

// this is the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const UserProvider = ({ children }) => {
  //we want to store currentUser and setCurrentUser
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    //the moment that the listener mounts. It will check the authentication state
    //and automatically initialze the listerner
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
      // console.log('user:- ', user)
    })
    return unsubscribe
  }, [])
  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
