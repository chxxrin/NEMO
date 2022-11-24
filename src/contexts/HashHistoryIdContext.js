import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const HashHistoryIdContext = createContext({})

const HashHistoryIdProvider = ({ children }) => {
  const [hashHistoryId, setHashHistoryId] = useState()

  const HashHistoryIdContextValue = {
    hashHistoryId,
    setHashHistoryId,
  }
  return (
    <HashHistoryIdContext.Provider value={HashHistoryIdContextValue}>
      {children}
    </HashHistoryIdContext.Provider>
  )
}

const useHashHistoryIdContext = () => useContext(HashHistoryIdContext)

export { HashHistoryIdProvider, useHashHistoryIdContext }
