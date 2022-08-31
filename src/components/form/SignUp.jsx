import React, { useState, useEffect } from 'react';
import validateData from '../../helper/validateForm';
import MyInput from './MyInput';
import styles from '../../assets/styles/signup.module.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false
    })

    const [errors, setErrors] = useState([])

    useEffect(() => {
        setErrors(validateData(data, 'signup'))
    }, [data])

    const changeHandler = event => {
        if(event.target.name === 'isAccepted') setData({...data, [event.target.name]: event.target.checked})
        else setData({...data, [event.target.name]: event.target.value})
    }

    const submitHandler = event => {
        event.preventDefault()
    }

    return (
        <div className={styles.mainContainer}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <div className={styles.formField}>
                    <MyInput
                        lable='name'
                        type='text'
                        name='name'
                        value={data.name}
                        changeClick={changeHandler}
                     />
                    {errors.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <MyInput
                        lable='confirmPassword'
                        type='password'
                        name='confirmPassword'
                        value={data.confirmPassword}
                        changeClick={changeHandler}
                     />
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.checkBox}>
                    <lable>i accept terms of privecy policy</lable>
                    <input
                        type='checkbox'
                        name='isAccepted'
                        value={data.isAccepted}
                        onChange={changeHandler}
                      />
                    {errors.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.btnContainer}>
                    <Link to='/login'>Login</Link>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;