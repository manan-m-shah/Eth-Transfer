import React from 'react'
import { useTransactionContext } from '../context/TransactionContext'

const style = {
  header: 'flex justify-end w-full',
  button:
    'm-6 p-2 border-2 border-white drop-shadow shadow bg-rose-200 hover:bg-rose-300 focus:shadow-outline focus:outline-none text-rose-800 font-bold rounded-2xl',
}

function Header() {
  const { currentAccount, isDarkMode, setIsDarkMode, connectMetamask } =
    useTransactionContext()

  return (
    <div className={style.header}>
      {currentAccount ? (
        <button className={style.button} type="button">
          {String(currentAccount).substring(0, 6) +
            '...' +
            String(currentAccount).substring(
              String(currentAccount).length - 4,
              String(currentAccount).length
            )}
        </button>
      ) : (
        <button
          className={style.button}
          type="button"
          onClick={connectMetamask}
        >
          Connect Wallet
        </button>
      )}
      <div></div>
    </div>
  )
}

export default Header
