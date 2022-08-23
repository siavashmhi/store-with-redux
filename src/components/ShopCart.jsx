import React, { useContext } from 'react';
import Cart from './shared/Cart';
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';
import styles from '../assets/styles/ShopCart.module.css'

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 &&
                <div className={styles.payments}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type: 'CLEAR'})}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch({type: 'CHECKOUT'})}>Checkount</button>
                    </div>
                </div>
            }

            {
                state.checkout && 
                <div className={styles.complete}>
                    <h3>checkout is successfuly...</h3>
                    <Link to='/products'>Back to shop</Link>
                </div>
            }

            {
                state.itemsCounter === 0 && !state.checkout && 
                <div className={styles.complete}>
                    <h3>Do you want buy more? </h3>
                    <Link to='/products'>Back to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;