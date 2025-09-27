import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Footer from './component/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <Navbar />
     <Hero />
     <Footer />
    </>
  )
}

export default App
