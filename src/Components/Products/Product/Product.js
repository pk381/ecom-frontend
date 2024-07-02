import styles from "./Product.module.css";
import { Link } from "react-router-dom";

function Product(props) {
  props = props.product;
  return (
    <div className={styles.container}>
      <div className={styles.tag}>Sales</div>
      <div className={styles.image}>
        {/* <img src={props.image_link} alt="not loaded"></img> */}
      </div>

      <div className={styles.subcontainer}>
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.name}>
              <Link to="product-page/:productId">{props.name}</Link>
            </div>
            <div className={styles.catogery}>{props.category}</div>
          </div>

          <div className={styles.prices}>
            <div className={styles.cut}>$800</div>
            <div className={styles.actual}>$500</div>
          </div>
        </div>

        <div className={styles.add}>
          <div className={styles.button}>+</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
