
import styles from './Dheader.module.css';
import logo from '../src/assets/drawing2.svg'
import { Link } from 'react-router-dom';

function DHeader(){
    return(
        <>
        <div className={styles.Wrapper}>
            <div className={styles.Header}>
                <img src={logo} alt="GreenScape Logo" />
                <h6>GreenScape<br/>Solutions</h6>
                <div className={styles.Nav}>
                    <ul>
                        <li> <Link to="/GreenScape/">Home</Link></li>
                        <li> <Link to="/GreenScape/Gallery">Gallery</Link></li>
                        <li> <Link to='/GreenScape/Contact'>Contact</Link></li>
                        <li> <Link to='GreenScape/About'>About</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )

}

export default DHeader;