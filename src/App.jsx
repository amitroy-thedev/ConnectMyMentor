import { useState } from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState('');

  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>

  )
}

export default App
