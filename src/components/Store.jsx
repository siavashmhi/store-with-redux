import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/productsActions';
import Product from './shared/Product';
import Loader from './Loader';
import styles from '../assets/styles/Store.module.css'

const Store = () => {

    const productsState = useSelector(state => state.productsState)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!productsState.products.length) dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.container}>
            {
                productsState.loading ? 
                <Loader /> :
                productsState.error ? 
                <p>something went wrong...</p> :
                productsState.products.map(product =>
                     <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;