import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price , 0)
    let shipping = 0;
    if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Orderd: {cart.length}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p>Total Price: {total + shipping} </p>
        </div>
    );
};

export default Cart;