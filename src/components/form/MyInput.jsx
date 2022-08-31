import React from 'react';

const MyInput = (props) => {
    
    const {lable, type, name, value, changeClick} = props
    return (
        <div>
            <lable>{lable}</lable>
            <input type={type} name={name} value={value} onChange={changeClick} />
        </div>
    );
};

export default MyInput;