import React from 'react';
import spinner from '../gif/Spinner.gif'

const myStyle = {width: '100%', textAlign: 'center'}
const Loader = () => {
    return (
        <div style={myStyle}>
            <img src={spinner} alt='gif' />
        </div>
    );
};

export default Loader;