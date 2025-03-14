import React from 'react';
import './Watch.css'

const Watch = ({watch}) => {
    const {name, price, model} = watch;
    return (
        <div className='watch'>
            <h3>Watches: {name}</h3>
            <p>Price: {price}</p>
            <p>Model: {model}</p>
        </div>
    );
};

export default Watch;