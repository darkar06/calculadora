import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Footer from './components/footer/Footer'

function App() {
  return (
    <section className='App' >
      <h1>Calculator app</h1>
      <Calculator />
      <Footer />
    </section>
  )
}

export default App
