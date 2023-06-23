import { createContext } from 'react'

/* === context ===
  - context is a kind of storage place
*/

// this is the actual value you want to access
export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  return <UserContext.Provider> {children} </UserContext.Provider>
}
