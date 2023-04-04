import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './Components/Map'
import MapDisplay from './Components/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MapDisplay/>
    </div>
  )
}

export default App
