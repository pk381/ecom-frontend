import styles from "./AboutProduct.module.css";
import Additional from "./Additional/Additional";
import ReviewArea from "./Additional/ReviewArea/ReviewArea";

function AboutProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.item}>Description</div>
        <div className={styles.item}>Additional information</div>
        <div className={styles.item}>Reviews</div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.itemDetails}>
        <div className={styles.description}>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend bag leo.
        </div>

        <Additional/>
        <ReviewArea/>
      </div>
    </div>
  );
}

export default AboutProduct;
