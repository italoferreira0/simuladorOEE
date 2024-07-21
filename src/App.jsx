import { useState } from 'react'
import './App.css'

import Navbar from "./components/Narbar"
import DivMaster from './components/DivMaster'
import BarChart from './components/BarChart'
import GrafOEETotal from './components/GrafOEETotal'
import GrafParadas from './components/GrafParadas'
import GrafProducao from './components/GrafProducao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <DivMaster>
        <BarChart />
        <GrafParadas />
        <GrafProducao />
        <GrafOEETotal />
      </DivMaster>
    </div>

  )
}
export default App
