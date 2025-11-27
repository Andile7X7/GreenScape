import styles from "./Section2.module.css"
import { MdWork } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import image1 from "../src/assets/Garden.jpg"
import image2 from "../src/assets/WaterFeature.png"
import image3 from "../src/assets/Boma.jpg"


function Section2(){
    return(
        <>
        <div className={styles.Divider}>
        </div>
        <div className={styles.Icon1}>
        <MdWork size={80}  style={{color:"#176004ff"}}/>
        <h2>Our Work</h2>
        </div>

        <div className={styles.Image}>
            <img src={image1} alt="Image of Landscape Garden" id={styles.Image1}/>
            <h1 id={styles.Text}>Land<br/>scaping</h1>
        </div>
        <div className={styles.Image}>
            <img src={image2} alt="Image of Landscape Garden" id={styles.Image1}/>
            <h1 id={styles.Text}>Water<br/>Features</h1>
        </div>
        <div className={styles.Image}>
            <img src={image3} alt="Image of Landscape Garden" id={styles.Image1}/>
            <h1 id={styles.Text}>Boma's &<br/>Entertainment</h1>
             <button id={styles.Button}>Get In Contact <IoIosCall/></button>
        </div>


        </>

    );
}

export default Section2;
