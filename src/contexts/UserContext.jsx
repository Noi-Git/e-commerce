import { createContext, useState } from 'react'

/* === context ===
  - context is a kind of storage place
*/

// this is the actual value you want to access
export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  //will receive value stored in currentUser and setCurrentUser
  //this provider is allowing any of its children components to access the values inside of its useState
  //<UseContext><App/></UseContext>
  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
