import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
// import Map from './Components/Map'
import MapDisplay from './Components/Map'
import '../src/Map.css';
import HomePage from './Pages/HomePage';
import Login from './Components/Login';

function App() {
 
  return (
    <div className="App">
      <MapDisplay/>
    </div>
  )
}

export default App
