import { createContext, useState } from "react";


const calculatorContext = createContext()

function CalculatorProvider({ children }) {
  const [calculator, setCalculator] = useState({
    operation: null,
    firstValue: "",
    secondValue: "",
    result: null,
    prevOperation: null
  })

  return (
    <calculatorContext.Provider value={{ calculator, setCalculator }} >
      {children}
    </calculatorContext.Provider>
  )
}

export default CalculatorProvider
export { calculatorContext }