import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import shopIcon from "../../assets/icons/shop.svg";
import styles from '../../assets/styles/Navbar.module.css'

const Navbar = () => {

    const cartState = useSelector(state => state.cartState)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.itemsContainer}>
                    <Link to="/products">Products</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div className={styles.iconContainer}>
                    <Link to="/Cart"><img src={shopIcon} alt="shop" /></Link>
                    <span>{cartState.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;