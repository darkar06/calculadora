import styles from "./footer.module.css"
import { FacebookIcon, GithubIcon, InstagramIcon, GitBranchIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <div>
        <h4 className={styles.title} >Redes sociales</h4>
        <ul className={styles.ul} >
          <li>
            <a href="https://www.facebook.com/ramsesenmanuel.gonzalez/" target="blank"> <FacebookIcon /> facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/darkenmax06/" target="blank" > <InstagramIcon /> instagram</a>
          </li>
          <li>
            <a href="https://github.com/darkar06" target="blank" > <GithubIcon /> github</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className={styles.title} >contribuciones</h4>
        <ul className={styles.ul} >
          <li>
            <a href="https://github.com/darkar06/calculadora" target="blank" > <GitBranchIcon /> this repository</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer