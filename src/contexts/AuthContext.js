import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userData, setUserData] = useState({})

  const logout = () => {
    setIsAuth(false)
    setUserData({})
    localStorage.clear()
  }
  const authContextValue = {
    isAuth,
    // login,
    logout,
    userData,
    setUserData,
    setIsAuth,
  }
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => useContext(AuthContext)

export { AuthProvider, useAuthContext }
