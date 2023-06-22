import styles from "./button.module.css"

const Button = ({ handleClick, value }) => {
  return (
    <div onClick={handleClick} className={styles.button} >
      {value}
    </div>
  )
}

export default Button