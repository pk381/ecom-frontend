import React, { useRef} from "react";
import styles from "./ProductBucket.module.css";
import Product from "../Product/Product";

function ProductBucket() {
  const boxRef = useRef(null);
  const productRef = useRef(null);

  const btnpressprev = () => {
    if (boxRef.current && productRef.current) {
      let width = productRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
      console.log(width);
    }
  };

  const btnpressnext = () => {
    if (boxRef.current && productRef.current) {
      let width = productRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
      console.log(width);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div className={styles.left} onClick={btnpressprev}>left</div>
        <div className={styles.right} onClick={btnpressnext}>right</div>
      </div>
      <div className={styles.description}>
        <h4>TRENDING</h4>
        <p>MOST TRENDING PRODUCTS</p>
      </div>
      <div className={styles.products} ref={boxRef}>
        <div ref={productRef}>
          <Product child={1}></Product>
        </div>
        <Product child={2}></Product>
        <Product child={3}></Product>
        <Product child={4}></Product>
        <Product child={5}></Product>
        <Product child={6}></Product>
        <Product child={7}></Product>
        <Product child={8}></Product>
      </div>
    </div>
  );
}

export default ProductBucket;
