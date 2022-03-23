import React, { useEffect, useState } from 'react'
import { contractABI, contractAddress } from '../lib/constants'
import { ethers } from 'ethers'

let eth: any

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

export const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )
  return transactionContract
}

// export const checkIfWalletIsConnected = async (metamask = eth) => {
//   try {
//     if (!metamask) return alert("Please install metamask ");

//     const accounts = await metamask.request({ method: "eth_accounts" });

//     return accounts
//   } catch (error) {
//     console.error(error);
//     throw new Error("No ethereum object.");
//   }
// };

export const connectWallet = async (metamask = eth) => {
  try {
    if (!metamask) return alert('Please install metamask ')

    const accounts = await metamask.request({ method: 'eth_requestAccounts' })

    return accounts
  } catch (error) {
    console.error(error)
    throw new Error('No ethereum object.')
  }
}

export const sendTransaction = async (
  currentAccount: any,
  formData: any,
  changeLoadingState: Function,
  metamask = eth
) => {
  try {
    if (!metamask) return alert('Please install metamask ')
    const { addressTo, amount } = formData
    const transactionContract = getEthereumContract()

    const parsedAmount = ethers.utils.parseEther(amount)

    await metamask.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: currentAccount,
          to: addressTo,
          gas: '0x7EF40', // 520000 Gwei
          value: parsedAmount._hex,
        },
      ],
    })

    const transactionHash = await transactionContract.publishTransaction(
      addressTo,
      parsedAmount,
      `Transferring ETH ${parsedAmount} to ${addressTo}`,
      'TRANSFER'
    )

    changeLoadingState(true)

    await transactionHash.wait()

    // await saveTransaction(
    //   transactionHash.hash,
    //   amount,
    //   connectedAccount,
    //   addressTo,
    // )

    changeLoadingState(false)
  } catch (error) {
    console.log(error)
  }
}
