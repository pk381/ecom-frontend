import { useState } from "react";
import styles from "./AboutProduct.module.css";
import Additional from "./Additional/Additional";
import ReviewArea from "./ReviewArea/ReviewArea";

function AboutProduct() {
  const [itemName, setItemName] = useState("description");

  const des = `Pellentesque habitant morbi tristique senectus et netus et malesuada
  fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
  ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
  egestas semper. Aenean ultricies mi vitae est. Mauris placerat
  eleifend bag leo`;

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.item} onClick={() => setItemName("description")}>
          Description
        </div>
        <div className={styles.item} onClick={() => setItemName("additional")}>
          Additional information
        </div>
        <div className={styles.item} onClick={() => setItemName("reviews")}>
          Reviews
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.itemDetails}>
        {itemName === "description" ? (
          <div className={styles.description}>{des}</div>
        ) : itemName === "additional" ? (
          <Additional />
        ) : (
          <ReviewArea />
        )}
      </div>
    </div>
  );
}

export default AboutProduct;
