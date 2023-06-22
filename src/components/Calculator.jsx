import useCalculator from "../hooks/useCalculator"
import ActionButton from "./actionButtons/ActionButton"
import Button from "./button/Button"
import DeleteButton from "./deleteButton/DeleteButton"
import "./style.css"

const Calculator = () => {
  const {
    calculator,
    changeValue,
    changeOperator,
    getResult,
    deleteAll,
    deleteSomething,
    error
  } = useCalculator()


  const handleNumbers = (event) => {
    event.preventDefault()
    const value = event.target.innerHTML.trim()
    console.log(value)
    changeValue(value)
  }

  const handleOperators = (event) => {
    const operator = event.target.innerHTML.trim()
    changeOperator(operator)
  }

  const handleResult = () => {
    getResult()
  }

  return (
    <div className="container">
      <div className="viewport">
        <div className="prev__operation" > {calculator.prevOperation} </div>
        <div className="actual__operation" > {calculator.result} </div>
        <div className="errors"> {error && error} </div>
      </div>
      <div className="buttonsContainer">
        <ul className="buttons">
          <DeleteButton value={"DEL"} handleClick={deleteAll} />
          <DeleteButton value={"<"} handleClick={deleteSomething} />
          <ActionButton value={"^"} handleClick={handleOperators} />
          <ActionButton value={"%"} handleClick={handleOperators} />

          <Button value={"9"} handleClick={handleNumbers} />
          <Button value={"8"} handleClick={handleNumbers} />
          <Button value={"7"} handleClick={handleNumbers} />
          <ActionButton value={"x"} handleClick={handleOperators} />


          <Button value={"6"} handleClick={handleNumbers} />
          <Button value={"5"} handleClick={handleNumbers} />
          <Button value={"4"} handleClick={handleNumbers} />
          <ActionButton value={"-"} handleClick={handleOperators} />


          <Button value={"3"} handleClick={handleNumbers} />
          <Button value={"2"} handleClick={handleNumbers} />
          <Button value={"1"} handleClick={handleNumbers} />
          <ActionButton value={"+"} handleClick={handleOperators} />


          <Button value={"."} handleClick={handleNumbers} />
          <Button value={"0"} handleClick={handleNumbers} />
          <ActionButton value={"="} handleClick={handleResult} />

        </ul>
      </div>
    </div>
  )
}

export default Calculator