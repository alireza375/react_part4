import React from 'react';

const Watch = ({watch}) => {
    const {name, price, model} = watch;
    return (
        <div>
            <h3>Watches: {name}</h3>
            <p>Price: {price}</p>
            <p>Model: {model}</p>
        </div>
    );
};

export default Watch;