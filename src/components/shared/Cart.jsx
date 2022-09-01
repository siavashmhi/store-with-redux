import React from'react';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../../redux/cart/cartActions';
import { shorten } from '../../helper/functions';
import styles from '../../assets/styles/Cart.module.css'
import trashIcon from '../../assets/icons/trash.svg'

const Cart = ({data}) => {

    const {image, title, price, quantity} = data;
    const dispatch = useDispatch()

    return (
        <div className={styles.container}>
            <img src={image} alt='img' className={styles.productImage} />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch(decrease(data))}>-</button> :
                    <button onClick={() => dispatch(removeItem(data))}>
                        <img src={trashIcon} alt="trash"/></button>
                }
                <button onClick={() => dispatch(increase(data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;