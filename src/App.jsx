import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/hero'
import Footer from './component/Footer'
import Contact from './component/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <Contact />
     <Footer />
    </>
  )
}

export default App
