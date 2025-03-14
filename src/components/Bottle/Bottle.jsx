import React from 'react';
import './Bottle.css';

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, price, weight, img} = bottle;
    return (
        <div className='bottle'>
            <h4>Name: {name}</h4>
            <p>Weight: {weight}</p>
            <img src= {img} alt="no image" />
            <p>Price: $ {price}</p>

            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
           
        </div>
    );
};

export default Bottle;