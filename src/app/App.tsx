import React from 'react'
import logo from './logo.svg'
import './App.css'

import HeroBanner from './components/HeroBanner'

import Films from './features/Films'

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Films />
    </div>
  )
}

export default App
