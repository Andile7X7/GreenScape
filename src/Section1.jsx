

import styles from "./Section1.module.css"
import { RiAccountPinCircleFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";

function Section1(){
    return(
        
            <div className={styles.Wrapper}>
            <div className={styles.Divider}>
            </div>
                <div className={styles.Icon1}>
                    {/* <RiAccountPinCircleFill size={80} style={{color:"#176004ff"}}/> */}
                    <RiSearchLine size={80} style={{color:"#176004ff"}}/>
                    <h2>Who are we?</h2>
                    <p>GreenScape Solutions designs and builds beautiful, functional outdoor spaces. We specialize in  blending creativity, sustainability, and craftsmanship to transform your environment.</p>
                 </div>

                <div className={styles.Divider}>
            </div>
                <div className={styles.Icon1}>
                    <MdOutlineQuestionMark size={80} style={{color:"#176004ff"}}/>
                    <h2> Why Choose Us?</h2>
                    <p>We priortise your vision by providing quality craftsmanship and stellar communication to truly understand what it is you envision for your property</p>
                 </div>

        </div>
        
    );

}

export default Section1;