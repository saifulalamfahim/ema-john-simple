import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom: '5px',
        paddingBotton: '5px',
        marginLeft: '200px'
    };
    return (
        <div style={reviewItemStyle} className="review=item">
            <h1 className="product-name">{name}</h1>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                onClick={() => props.removeProduct(key)} className="main-button">
                Remove</button>
        </div>
    );
};

export default ReviewItem;