import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Phones from "./components/phones"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Phones />
      </div>
    </>
  )
}

export default App
