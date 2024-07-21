import { useState } from 'react'
import './App.css'

import Navbar from "./components/Narbar"
import DivMaster from './components/DivMaster'
import BarChart from './components/BarChart'
import GrafOEETotal from './components/GrafOEETotal'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <DivMaster>
        <BarChart/>
        <GrafOEETotal/>
        
        
      </DivMaster>
    </div>

  )}
export default App
