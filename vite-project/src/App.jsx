import { useState } from 'react'
import Navbar from './components/organism/Navbar/Navbar'
import Home from './components/organism/Home/Home'
import Footer from './components/organism/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Navbar/>
      <Home/>
      
      <Footer/>
    </>
  )
}

export default App