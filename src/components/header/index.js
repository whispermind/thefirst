import styles from './stylesheet.module.css';
const Header = ({ title, descr }) => {
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        {title ? (<h1>{title}</h1>) : null}
        {descr ? (<p>{descr}</p>) : null}
      </div>
    </header>
  )
}

export default Header