import styles from './Review.module.css';

function Review(){
    return(
        <div className={styles.container}>

            <div className={styles.info}>
                <div className={styles.img}>
            
                </div>
                <div className={styles.infos}>
                    <h3 className={styles.userId}>YUANNANITA131631</h3>
                    <p className={styles.date}>FEBRUARY 10, 2015</p>
                    <p className={styles.comment}>awesome themes, i like this</p>
                </div>
            </div>

            <div className={styles.ratting}>
                *****
            </div>

        </div>
    )
}

export default Review;