
import styles from './HiddenMenu.module.css';
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";




function HiddenMenu({MenuOpen}){
    const [ShowInner, setShowInner] = useState(false);

    return(

        <div className={`${styles.Menu} ${MenuOpen ? styles.Open: ''}`}>
            <div id={styles.Item}>Services</div>
            <div id={styles.Item} onClick={() => setShowInner(!ShowInner)}
                style={{cursor:"pointer"}}> <span id='Gallery'>Gallery </span>
                <div className={`${styles.InnerMenu} ${ShowInner ? styles.Show : ''}`}>
                    <div id={styles.InnerItem}>Landscaping Gallery</div>
                    <div id={styles.InnerItem}>Water Features</div>
                    <div id={styles.InnerItem}>Bomas & Entertainment</div>
                </div>

            </div>
            <div id={styles.Item}>Contact</div>
            <div id={styles.Item}>About</div>
        </div> 
    );

}

export default HiddenMenu;

