import styles from './stylesheet.module.css'
const Footer = (props) => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  )
}
export default Footer