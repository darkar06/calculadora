import { useState, useContext } from 'react'
import { calculatorContext } from '../context/calculatorContext'


export default function useCalculator() {
  const { calculator, setCalculator } = useContext(calculatorContext)
  const [error, setError] = useState(null)

  const changeValue = (value) => {

    if (!calculator.operation) {
      if (calculator.firstValue.includes(".") && value === ".") return null

      let valueToChange = calculator.firstValue + value
      setCalculator({
        ...calculator,
        firstValue: valueToChange,
        result: valueToChange
      })
    }

    else {
      if (calculator.secondValue.includes(".") && value === ".") return null

      let valueToChange = calculator.secondValue + value
      setCalculator({
        ...calculator,
        secondValue: valueToChange,
        result: calculator.result + value
      })
    }
  }

  const changeOperator = (operator) => {
    if (!calculator.firstValue) {
      changeValue(operator)
      return null
    }
    if (calculator.operation !== null) {
      setError("solo una operacion a la vez")
      setTimeout(() => setError(null), 5000)
      return null
    }
    setCalculator({
      ...calculator,
      operation: operator,
      result: calculator.result + operator
    })
  }

  const getResult = () => {

    let primerResultado = parseFloat(calculator.firstValue)
    let segundoResultado = parseFloat(calculator.secondValue)
    let resultado = null

    if (isNaN(primerResultado)) primerResultado = 0
    if (isNaN(segundoResultado)) segundoResultado = 0


    switch (calculator.operation) {
      case "^": resultado = primerResultado ** segundoResultado
        break
      case "+": resultado = primerResultado + segundoResultado
        break
      case "-": resultado = primerResultado - segundoResultado
        break
      case "x": resultado = primerResultado * segundoResultado
        break
      case "%": resultado = primerResultado / segundoResultado
        break
      default: resultado = primerResultado + segundoResultado
    }


    if (resultado == "Infinity" && resultado == "-Infinity") {
      setCalculator({
        prevOperation: calculator.result,
        result: resultado.toString(),
        firstValue: "",
        secondValue: "",
        operation: null
      })
      return null
    }

    setCalculator({
      prevOperation: calculator.result,
      result: resultado.toString(),
      firstValue: resultado.toString(),
      secondValue: "",
      operation: null
    })
  }

  const deleteAll = () => {
    setCalculator({
      ...calculator,
      operation: null,
      firstValue: "",
      secondValue: "",
      result: null
    })
  }

  const deleteSomething = () => {
    if (calculator.operation && calculator.secondValue === "") {
      setCalculator({
        ...calculator,
        operation: null,
        result: calculator.result.slice(0, -1)
      })
    }

    else if (!calculator.operation) {
      const valor = calculator.firstValue.slice(0, -1)
      setCalculator({
        ...calculator,
        result: valor,
        firstValue: valor
      })
    }

    else {
      setCalculator({
        ...calculator,
        result: calculator.result.slice(0, -1),
        secondValue: calculator.secondValue.slice(0, -1)
      })
    }
  }

  return {
    calculator,
    changeValue,
    changeOperator,
    getResult,
    deleteAll,
    deleteSomething,
    error
  }
}