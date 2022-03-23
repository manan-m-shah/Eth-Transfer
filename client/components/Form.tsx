import React from 'react'
import { useTransactionContext } from '../context/TransactionContext'

const style = {
  form: 'm-4 w-full max-w-lg rounded-2xl drop-shadow-2xl bg-white',
  field: 'm-6 my-2 p-0',
  label: 'py-2 block text-xl font-bold text-rose-400',
  input:
    'text-2xl w-full appearance-none rounded-2xl border-2 border-gray-300 bg-gray-100 p-5 leading-tight focus:border-rose-300 focus:bg-white focus:outline-none',
  text: 'w-full text-white text-sm appearance-none rounded border-2 border-slate-400 bg-slate-400 p-2 leading-tight text-gray-700 focus:border-rose-300 focus:outline-none',
  buttonDiv: 'my-6 flex items-center justify-start p-0',
  button:
    'w-full mx-6 shadow bg-rose-200 hover:bg-rose-300 focus:shadow-outline focus:outline-none text-rose-800 font-bold p-5 rounded-2xl',
}

function TransactionForm() {
  const {
    currentAccount,
    formData,
    isLoading,
    changeFormData,
    connectMetamask,
    makeTransaction,
  } = useTransactionContext()

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    const { addressTo, amount } = formData
    e.preventDefault()
    if (!addressTo || !amount) return
    makeTransaction()
  }

  const handleChange = (e: React.BaseSyntheticEvent, name: string) => {
    changeFormData(e, name)
  }

  return (
    <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
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
      <div className={style.buttonDiv}>
        {!(isLoading || !currentAccount) && (
          <button className={style.button} type="submit">
            Send
          </button>
        )}
        {!currentAccount && (
          <button
            className={style.button}
            type="button"
            onClick={connectMetamask}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </form>
  )
}

export default TransactionForm
