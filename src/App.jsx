import { useState } from 'react'
import './App.css'

import Navbar from "./components/Narbar"
import DivMaster from './components/DivMaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <DivMaster/>
    </div>

  )}
export default App
