import styles from './Body.module.css';
import Item from '../Item/Item';

function Body(){

    return(
        <div className={styles.body}>

            <div className={styles.items}>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>


            </div>

            <div className={styles.sidebar}>

            </div>

        </div>
    )
}

export default Body;