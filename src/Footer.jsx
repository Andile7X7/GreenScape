
import styles from './Footer.module.css'
import { IoIosCall } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";


function Footer(){

    return(
        <>
        <div className={styles.Wrapper}>
        <div className={styles.Header}>
                     <div className={styles.Logo}>
                    </div>
                    <h2 id={styles.Name}>GreenScape<br/>Solutions</h2>
        </div>

        <div className={styles.Info}>
                <div className={styles.Icon}>
                <IoIosCall size={40} style={{color:"#39b11b"}}/>
                </div>
                <p>+27 00 999 5555</p>
        </div>

        <div className={styles.Info}>
                <div className={styles.Icon}>
                <MdOutlineAlternateEmail size={40} style={{color:"#39b11b"}}/>
                </div>
                <p>Info@GreenScape.co.za</p>
        </div>

        <div className={styles.Info}>
                <div className={styles.Icon}>
                <FaMapLocationDot size={40} style={{color:"#39b11b"}}/>
                </div>
                <p>101 Oak Road, Tshwane</p>
        </div>

        <div className={styles.FooterContent}>
            <p>
                <br/>
               2025 &copy; GreenScape Solutions || All Rights Reserved
            </p>
        </div>

        
        </div>
        </>
    );

}

export default Footer;