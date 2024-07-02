import React, { useRef, useState, useEffect } from "react";
import styles from "./ProductBucket.module.css";
import Product from "../Product/Product";
import url from '../../../axios';

function ProductBucket(props) {
  const boxRef = useRef(null);
  const productRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await url.get('/products.json', {
          headers: { 'Content-Type': 'application/json' },
          params: { product_type: props.type }
        });

        const validProducts = await Promise.all(
          res.data.map(async (product) => {
            const isValid = await validateImage(product.image_link);
            return isValid ? product : null;
          })
        );

        setProducts(validProducts.filter(product => product !== null));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [props.type]);

  const validateImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  const btnpressprev = () => {
    if (boxRef.current && productRef.current) {
      let width = productRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    }
  };

  const btnpressnext = () => {
    if (boxRef.current && productRef.current) {
      let width = productRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    }
  };

  return (
    <div className={styles.container}>
      {!loading && !error && products.length > 0 && (
        <div className={styles.buttons}>
          <div className={styles.left} onClick={btnpressprev}>left</div>
          <div className={styles.right} onClick={btnpressnext}>right</div>
        </div>
      )}
      <div className={styles.description}>
        <h4>TRENDING</h4>
        <p>MOST TRENDING {props.type}</p>
      </div>
      <div className={styles.products} ref={boxRef}>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && products.length > 0 && (
          <>
            {products.map((product, index) => (
              <div key={index} ref={index === 0 ? productRef : null}>
                <Product product={product} />
              </div>
            ))}
          </>
        )}
        {!loading && !error && products.length === 0 && (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductBucket;
