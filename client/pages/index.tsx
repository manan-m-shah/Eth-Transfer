import type { NextPage } from 'next'
import TransactionForm from '../components/TransactionForm'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-purple-50">
      <TransactionForm />
    </div>
  )
}

export default Home
