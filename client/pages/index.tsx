import type { NextPage } from 'next'
import Form from '../components/Form'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-rose-50">
      <Header />
      <div className="flex h-full flex-col items-center justify-center">
        <Form />
      </div>
    </div>
  )
}

export default Home
