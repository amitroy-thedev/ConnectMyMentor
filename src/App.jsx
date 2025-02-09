import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState('');

  return (

    <div className=' bg-sky-900 h-screen text-white text-2xl flex justify-center items-center'>
      <Dashboard/>
    </div>

  )
}

export default App
