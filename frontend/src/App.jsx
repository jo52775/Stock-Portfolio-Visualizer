import { useState } from 'react'
import './App.css'
import ContentContainer from './ContentContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContentContainer/>
    </>
  )
}

export default App
