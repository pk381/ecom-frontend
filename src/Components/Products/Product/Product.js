import styles from "./Product.module.css";
import { Link } from "react-router-dom";

function Product(props) {
  props = props.product;

  return (
    <div className={styles.container}>
      <div className={styles.tag}>Sales</div>
      <div className={styles.image}>
        <img src={props.image_link} alt="not loaded"></img>
      </div>

      <div className={styles.subcontainer}>
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.name}>
              <Link
                to={`/product-page/${props.id}`}
                state={{ props }}
              >
                {props.name}
              </Link>
            </div>
            <div className={styles.catogery}>{props.category}</div>
          </div>

          <div className={styles.prices}>
            <div className={styles.cut}>{(Number(props.price)+5).toFixed(2)}$</div>
            <div className={styles.actual}>{Number(props.price).toFixed(2)}$</div>
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
