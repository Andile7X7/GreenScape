
import styles from './HiddenMenu.module.css';
import { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';




function HiddenMenu({MenuOpen}){
    const [ShowInner, setShowInner] = useState(false);

    return(

        <div className={`${styles.Menu} ${MenuOpen ? styles.Open: ''}`}>
           <link to='/'>
           
           <div id={styles.Item}>Services</div>

           </link> 
            <div id={styles.Item} onClick={() => setShowInner(!ShowInner)}
                style={{cursor:"pointer"}}> <span id='Gallery'>Gallery </span>
                <div className={`${styles.InnerMenu} ${ShowInner ? styles.Show : ''}`}>
                    <link>
                    <div id={styles.InnerItem}>Landscaping Gallery</div>
                    </link>

                    <div id={styles.InnerItem}>Water Features</div>
                    <link>

                    <div id={styles.InnerItem}>Bomas & Entertainment</div>
                    </link>

                </div>

            </div>
            
            <div id={styles.Item}>Contact</div>
            <div id={styles.Item}>About</div>
        </div> 
    );

}

export default HiddenMenu;

