import { useState } from 'react'
import Home from './pages/Home.jsx'
import Dum from './pages/Dum.jsx'
import Navbar from './components/Navbar.jsx'
import About from './pages/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home />
      {/* <Dum /> */}
      <About/>
    </>
  )
}

export default App
