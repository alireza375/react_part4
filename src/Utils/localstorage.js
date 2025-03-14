const getStoredCart = () => {
    const storedCardString = localStorage.getItem('cart');

    if(storedCardString){
        return JSON.parse(storedCardString);
    } return [];
}

const saveCartToLS = cart => {
    const cartStringifield = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringifield);
}


const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // Save to Local storage
    saveCartToLS(cart);

}

export {addToLS}