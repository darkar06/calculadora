import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CalculatorProvider from './context/calculatorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CalculatorProvider>
    <App />
  </CalculatorProvider>,
)
