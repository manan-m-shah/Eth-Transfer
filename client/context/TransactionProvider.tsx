import React, { useState } from 'react'
import TransactionContext from './TransactionContext'

const TransactionProvider: React.FC = (props) => {
  const [currentAccount, setCurrentAccount] = useState()
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
  })

  const changeFormData = (e: React.BaseSyntheticEvent, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }
  const sendTransaction = () => {
    setFormData({
      addressTo: '',
      amount: '',
    })
    return
  }
  const sender = '0x8ea01bc71EF698c3ef5Ab765c1A912035FEf6c08'

  return (
    <TransactionContext.Provider
      value={[currentAccount, formData, changeFormData, sendTransaction]}
    >
      {props.children}
    </TransactionContext.Provider>
  )
}

export default TransactionProvider
