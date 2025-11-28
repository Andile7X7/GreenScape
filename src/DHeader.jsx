
import styles from './Dheader.module.css';
import logo from '../src/assets/drawing.svg'

function DHeader(){
    return(
        <>
        <div className={styles.Wrapper}>
            <div className={styles.Header}>
                <img src={logo} alt="GreenScape Logo" />
                <h6>GreenScape<br/>Solutions</h6>
                <div className={styles.Nav}>
                    <ul>
                        <li>Services</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )

}

export default DHeader;