import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import SlideShow from './Components/SlideShow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <SlideShow /> */}
    </>
  )
}

export default App
