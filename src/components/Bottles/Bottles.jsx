import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS, getStoredCart } from '../../Utils/localstorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from local storage
    useEffect(() => {
        console.log('called the useEffect', bottles.length);
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart);
        }
    }, [bottles])


    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <hr />
            <h4>Cart: {cart.length}</h4>
            <hr />
           <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart = {handleAddToCart}>
                    </Bottle>)
                }
           </div>
        </div>
    );
};

export default Bottles;