import styles from './CategoryPage.module.css'

import { useState, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import url from '../../axios'

import Product from '../Products/Product/Product';

function CategoryPage() {

    const category = useLocation().state;
    // console.log("category========", category);
    const productRef = useRef(null);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await url.get('/products.json', {
                    headers: { 'Content-Type': 'application/json' },
                    params: { product_type: category }
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
    }, [category]);

    const validateImage = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };



    return (
        <div className={styles.container}>

            <h1 className={styles.category}>category: {"  "+category}</h1>

            <div className={styles.products}>

                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {
                    !loading && !error && products.length > 0 && (
                        <>
                            {products.map((product, index) => (
                                <div key={index} ref={index === 0 ? productRef : null}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </>
                    )
                }
                {
                    !loading && !error && products.length === 0 && (
                        <p>No products found.</p>
                    )
                }
            </div>
        </div>
    )
}

export default CategoryPage;