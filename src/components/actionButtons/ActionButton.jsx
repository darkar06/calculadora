import styles from "./actionButton.module.css"

const ActionButton = ({ value, handleClick }) => {
  return (
    <div onClick={handleClick} className={styles.button} >
      {value}
    </div>
  )
}

export default ActionButton