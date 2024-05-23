import styles from './Products.module.css'

import ProductBucket from './ProductBucket/ProductBucket';

function Products(){

    return(
        <div className={styles.container}>
            <ProductBucket></ProductBucket>
            <ProductBucket></ProductBucket>
            <ProductBucket></ProductBucket>
            <ProductBucket></ProductBucket>
            <ProductBucket></ProductBucket>
            <ProductBucket></ProductBucket>
        </div>
    );
}

export default Products;