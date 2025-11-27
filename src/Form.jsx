
import styles from "./Form.module.css"

function Form(){
    return(
        <>

            <div className={styles.Divider}>
            </div>
            <h2>Talk to Us!</h2>
            <form action="" id={styles.Form}>
                <fieldset>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name"required/>

                <label htmlFor="CellPhone">Phone</label>
                <input type="tel" name="CellPhone"/>

                <label htmlFor="Description">Describe your needs</label>
                <textarea name="Description" id="Description"></textarea>

                <button type="submit">Send</button>

                </fieldset>



            </form>

        </>
    );
}

export default Form;