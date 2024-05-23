import styles from "./Product.module.css";

function Product(props) {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>Sales</div>
      <div className={styles.image}>{props.child}</div>

      <div className={styles.subcontainer}>
        <div className={styles.info}>
          <div className={styles.text}>
            <div className={styles.name}>POCKET WATCH</div>
            <div className={styles.catogery}>ACCESSORIES</div>
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
