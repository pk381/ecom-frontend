import React, { useRef, useState, useEffect } from "react";
import styles from "./ProductBucket.module.css";
import Product from "../Product/Product";
import url from '../../../axios'

function ProductBucket(props) {
  const boxRef = useRef(null);
  const productRef = useRef(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    url.get('/products.json', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        // product_category: 'gel',
        product_type: 'blush'
        // https://makeup-api.herokuapp.com/
      }
    })
    .then(res => {
      console.log(res);
      setProducts(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

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
          <Product product={products[0]}></Product>
        </div>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      </div>
    </div>
  );
}

export default ProductBucket;
