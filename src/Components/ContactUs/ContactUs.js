import styles from './ContactUs.module.css';

function ContactUs() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <lable for='fullname'>Full Name:</lable>
                    <input type="text" />
                </div>

                <div className={styles.inputs}>
                    <lable for='email'>Email:</lable>
                    <input type="email" />
                </div>
                <div className={styles.inputs}>
                    <lable for='message'>Message:</lable>
                    <textarea type="text" />
                </div>

                <div className={styles.inputs}>
                    <button type="submit" className={styles.button} value={"submit"}>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default ContactUs