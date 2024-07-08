import styles from "./ProductPage.module.css";
import AboutProduct from "./AboutProduct/AboutProduct";

import { useLocation } from "react-router-dom";
import { useState } from "react";

function ProductPage() {

  const location = useLocation();
  const product = location.state?.props;

  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.images}>

          <div className={styles.imgs}>
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
          </div>
          <div className={styles.image}>
            <img src={product.image_link} alt="Not loading" />
          </div>
        </div>

        <div className={styles.details}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.category}>Brand: {product.brand}</p>
          <div className={styles.ratting}>Rating: {product.rating}</div>

          <div className={styles.description}>
            {product.description}
          </div>

          <div className={styles.prices}>
            <div className={styles.cut}>{product.price + product.price_sign}</div>
            <div className={styles.origional}>{product.price + product.price_sign}</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.quantityBox}>
              <button className={styles.button} onClick={()=> quantity === 1? setQuantity(1): setQuantity(quantity-1)}>-</button>
              <div className={styles.quantity}>{quantity}</div>
              <button className={styles.button} onClick={()=> setQuantity(quantity+1)}>+</button>
            </div>
            <button className={styles.addToCart}>ADD TO CART</button>
          </div>
          <button className={styles.addToWish}> ADD TO WISH LIST</button>
        </div>
      </div>
      <AboutProduct description={product.description} />
    </div>
  );
}

export default ProductPage;
