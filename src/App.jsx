import { useState } from 'react'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState('');

  return (
    <div className=' bg-sky-900 h-screen text-white text-2xl flex justify-center items-center'>
      <Dashboard/>
    </div>
  )
}

export default App
