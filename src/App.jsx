import { useState } from 'react'
import './App.css'
import FooterSection from './components/FooterSection'
import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black'>
    <HomePage />
    <FooterSection />
    </div>
    </>
  )
}

export default App
