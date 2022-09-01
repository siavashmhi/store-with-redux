import React, { useState, useEffect } from 'react';
import MyInput from './MyInput';
import validateData from '../../helper/validateForm';
import styles from '../../assets/styles/login.module.css'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../helper/toast';

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validateData(data, 'login'))
    }, [data])

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const submitHandler = event => {
        event.preventDefault()
        if(Object.keys(errors).length === 0) {
            notify('you login in successfuly', 'success')
        } else {
            notify('invalid input, please try again!')
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <div className={styles.formField}>
                    <MyInput
                        lable='email'
                        type='email'
                        name='email'
                        value={data.email}
                        changeClick={changeHandler}
                     />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <MyInput
                        lable='password'
                        type='password'
                        name='password'
                        value={data.password}
                        changeClick={changeHandler}
                     />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.btnContainer}>
                    <Link to='./signup'>Sign Up</Link>
                    <button>Login</button>
                </div>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
             />
        </div>
    );
};

export default Login;