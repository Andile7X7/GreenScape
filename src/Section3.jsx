
import styles from "./Section3.module.css"
import { RiChatAiFill } from "react-icons/ri";
import { FaFilePen } from "react-icons/fa6";
import { IoIosConstruct } from "react-icons/io";

function Section3(){
    return(
        <>
        <div className={styles.Wrapper}>
        <div className={styles.Divider}>
         </div>
         <h2>How We Create your<br/> Dream Place</h2>

         <div className={styles.Step1}>
            <div className={styles.Icon}>
            <RiChatAiFill size={40} color={"#39b11b"}/>
            </div>
            <div className={styles.Paragraph}>
                <p>Consultation</p>
            <p>You contact us and we provide a free visit and Quotation</p>
            </div>
         </div>

            <div className={styles.Step1}>
            <div className={styles.Icon}>
            <FaFilePen size={40} color={"#39b11b"}/>
            </div>
            <div className={styles.Paragraph}>
                <p>Planning</p>
            <p>Planning to get every detail correct and deliver a quality service</p>
            </div>
         </div>

         <div className={styles.Step1}>
            <div className={styles.Icon}>
            <IoIosConstruct size={40} color={"#39b11b"}/>
            </div>
            <div className={styles.Paragraph}>
                <p>Implementation</p>
            <p>Construction begins and your dreams become reality</p>
            </div>
         </div>
        </div>
        </>
    );
}

export default Section3;
