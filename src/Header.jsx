import { div } from "three/tsl";
import logo from "../src/assets/drawing.svg";
import MenuIcon from "../src/assets/Menu.svg";
import styles from './Header.module.css';


function Header({MenuOpen, setMenuOpen}){
    return(
        <div className={styles.Header}>
                     <div className={styles.Logo}>
                    </div>
                    <h2 id={styles.Name}>GreenScape<br/>Solutions</h2>
                    <img src={MenuIcon} alt="MenuIcon" id={styles.Menu}
                    onClick={()=> {
                        setMenuOpen(!MenuOpen)
                    }}
                    style={{cursor:"pointer"}}
                    />
        </div>
    );

}

export default Header;