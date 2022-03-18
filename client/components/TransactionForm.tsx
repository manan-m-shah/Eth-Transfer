import React, { useState } from 'react'
import { useTransactionContext } from '../context/TransactionContext'

const style = {
  field: 'm-6 p-2',
  label: 'py-2 block font-bold text-gray-500',
  input:
    'w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 p-2 leading-tight text-gray-700 focus:border-purple-300 focus:bg-white focus:outline-none',
  text: 'w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 p-2 leading-tight text-gray-700 focus:border-purple-300 focus:outline-none',
  button:
    'mx-6 shadow bg-purple-400 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded',
}

function TransactionForm() {
  const [sender, formData, changeFormData, sendTransaction] =
    useTransactionContext()

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    const { addressTo, amount } = formData
    e.preventDefault()
    if (!addressTo || !amount) return
    sendTransaction()
  }

  const handleChange = (e: React.BaseSyntheticEvent, name: string) => {
    changeFormData(e, name)
  }

  return (
    <form className="w-full max-w-lg" onSubmit={(e) => handleSubmit(e)}>
      <div className={style.field}>
        <div className="">
          <label className={style.label}>Sender</label>
        </div>
        <div className="">
          <input
            className={style.text}
            type="text"
            readOnly={true}
            value={sender}
          />
        </div>
      </div>
      <div className={style.field}>
        <div className="">
          <label className={style.label}>Amount</label>
        </div>
        <div className="">
          <input
            className={style.input}
            type="text"
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, 'amount')}
            value={formData.amount}
          />
        </div>
      </div>
      <div className={style.field}>
        <div className="">
          <label className={style.label}>Receiver</label>
        </div>
        <div className="">
          <input
            className={style.input}
            type="text"
            placeholder="0x..."
            onChange={(e) => handleChange(e, 'addressTo')}
            value={formData.addressTo}
          />
        </div>
      </div>
      <div className="flex items-center justify-start p-2">
        <button className={style.button} type="submit">
          Send
        </button>
      </div>
    </form>
  )
}

export default TransactionForm
