import styles from "./DeleteButton.module.css"

const DeleteButton = ({ value, handleClick }) => {
  return (
    <div onClick={handleClick} className={styles.button} >
      {value}
    </div>
  )
}

export default DeleteButton