import styles from './Item.module.css';

import img from '../Assets/Common/post.jpg'

function Item(){

    return(

        <div className={styles.item}>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>

            <div className={styles.info}>
                <h1>Restorant Name</h1>
                <div className={styles.stars}></div>
                <p className={styles.dish}>Best Dish: <span>Dish Name</span></p>
                <p className={styles.address}>Address: <span>Street 143, Noida sector 122, UP</span></p>
                <p className={styles.price}> Average Price: <span>$4.99</span></p>
            </div>

        </div>

    )
}

export default Item;