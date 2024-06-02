import styles from './Review.module.css'
import img from '../Assets/Common/post.jpg'

function Review(){

    return(
        <div className={styles.bg}>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>

            <div className={styles.info}>
            </div>
        </div>
    )


}

export default Review;