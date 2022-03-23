import React, { useState } from 'react'
import TransactionContext from './TransactionContext'
import { connectWallet, sendTransaction } from '../utils/ethers'

const TransactionProvider: React.FC = (props) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const changeFormData = (e: React.BaseSyntheticEvent, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const changeLoadingState = () => {
    setIsLoading((prevState) => !prevState)
  }

  const connectMetamask = async () => {
    const accounts: any = await connectWallet()
    if (accounts.length) {
      setCurrentAccount(accounts[0])
    }
  }

  const makeTransaction = () => {
    sendTransaction(currentAccount, formData, changeLoadingState)
    setFormData({
      addressTo: '',
      amount: '',
    })
  }

  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        formData,
        isLoading,
        isDarkMode,
        changeFormData,
        setIsDarkMode,
        connectMetamask,
        makeTransaction,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  )
}

export default TransactionProvider
