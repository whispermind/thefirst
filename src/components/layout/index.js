import styles from './stylesheet.module.css'
const Layout = (props) => {
    const bg = {
        backgroundColor: props.colorBg,
        backgroundImage: `url(${props.urlBg})`
    }
    return (<section className={styles.root}>
        <div className={styles.wrapper} style={bg}>
            <article>
                <div className={styles.title}>
                    {props.title ? (<h3>{props.title}</h3>) : null}
                    <span className={styles.separator}></span>
                </div>
                <div className={styles.desc, styles.full}>
                    {props.descr ? (<p>{props.descr}</p>) : null}
                </div>
            </article>
        </div>
    </section>)
}

export default Layout