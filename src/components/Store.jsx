import React, { useContext } from 'react';
import Product from './shared/Product';
import { ProductsContext } from '../context/ProductContextProvider';
import styles from '../assets/styles/Store.module.css'

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product 
                                            key={product.id} 
                                            productData={product} 
                                        />)
            }
        </div>
    );
};

export default Store;