import { useState } from 'react'
import './App.css'
import FooterSection from './components/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FooterSection />
    </>
  )
}

export default App
