import { createContext, useState, useEffect } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

// this is the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CURRENT_USER': //type
      return {
        currentUser: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export const UserProvider = ({ children }) => {
  //we want to store currentUser and setCurrentUser
  // const [currentUser, setCurrentUser] = useState(null)
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

/* === Reducer is pretty much like function ===
         -- return back an object

const userReducer = () => {
  return { 
    -- object that have shape of the data we want to store
    -- ex. store anything related to user
    -- always return a new object
    currentUser: -- change base on action
  }
}
*/
