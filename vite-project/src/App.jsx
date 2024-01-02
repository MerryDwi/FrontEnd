import { useState } from 'react'
import Navbar from './components/organism/Navbar/Navbar'
import Home from './components/organism/Home/Home'
import Course from './components/organism/Course/Course'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Navbar/>
      <Home/>
      <Course/>
    </>
  )
}

export default App