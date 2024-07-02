import styles from './Products.module.css'

import ProductBucket from './ProductBucket/ProductBucket';

function Products(){

    return(
        <div className={styles.container}>
            <ProductBucket type={'blush'}></ProductBucket>
            <ProductBucket type={'bronzer'}></ProductBucket>
            <ProductBucket type={'eyeliner'}></ProductBucket>
            {/* <ProductBucket type={'lip_liner'}></ProductBucket>
            <ProductBucket type={'foundation'}></ProductBucket>
            <ProductBucket type={'eyeshadow'}></ProductBucket> */}
        </div>
    );
}

export default Products;