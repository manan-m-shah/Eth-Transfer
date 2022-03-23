import React from 'react'
import { createContext } from 'react'

const TransactionContext = createContext({} as any)
export const useTransactionContext = () => {
  return React.useContext(TransactionContext)
}

export default TransactionContext
