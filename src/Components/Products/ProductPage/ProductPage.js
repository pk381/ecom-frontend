import styles from "./ProductPage.module.css";
import AboutProduct from "./AboutProduct/AboutProduct";

import { useParams } from "react-router-dom";

function ProductPage() {

  const {productId} = useParams();
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.images}>

            <div className={styles.imgs}>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className={styles.image}>
            </div>
        </div>

        <div className={styles.details}>
          <h3 className={styles.title}>{productId}</h3>
          <p className={styles.category}>BAGS</p>
          <div className={styles.ratting}>5</div>

          <div className={styles.description}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </div>

          <div className={styles.prices}>
            <div className={styles.cut}>£29.00</div>
            <div className={styles.origional}>£34.00</div>
          </div>
          <div className={styles.actions}>
                <div className={styles.quantityBox}>
                    <button className={styles.button}>-</button>
                    <div className={styles.quantity}>1</div>
                    <button className={styles.button}>+</button>
                </div>
                <button className={styles.addToCart}>ADD TO CART</button>
          </div>
          <button className={styles.addToWish}> ADD TO WISH LIST</button>
        </div>
      </div>
      <AboutProduct/>
    </div>
  );
}

export default ProductPage;
