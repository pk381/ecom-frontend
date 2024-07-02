import { useState } from "react";
import styles from "./AboutProduct.module.css";
import Additional from "./Additional/Additional";
import ReviewArea from "./ReviewArea/ReviewArea";

function AboutProduct(props) {
  const [itemName, setItemName] = useState("description");

  const des = props.description;

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
