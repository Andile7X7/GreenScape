import styles from './LandScape.module.css'

function LandScape(){
    return(
        <>
         <h2>Our Gallery </h2>
        <div className={styles.Wrapper}>
        <div className={styles.div1}></div>
        <div className={styles.div2}></div>
        <div className={styles.div3}>
            <p>Land<br/>Scaping</p>
        </div>
        <div className={styles.div4}></div>
        <div className={styles.div5}></div>
        </div>

            <div className={styles.Divider}>
            </div>

                <div className={styles.Wrapper}>
        <div className={styles.div6}></div>
        <div className={styles.div7}></div>
        <div className={styles.div8}><p>Water<br/>Features</p>
        </div>
        <div className={styles.div9}></div>
        <div className={styles.div10}></div>
        </div>

                    <div className={styles.Divider}>
            </div>

                <div className={styles.Wrapper}>
        <div className={styles.div11}></div>
        <div className={styles.div12}></div>
        <div className={styles.div13}><p>Water<br/>Features</p>
        </div>
        <div className={styles.div14}></div>
        <div className={styles.div15}></div>
        </div>
        </>
    )
}

export default LandScape