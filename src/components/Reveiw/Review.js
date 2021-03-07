import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../../fakeData/ReviewItem/ReviewItem';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCArt] = useState([]);
    const [orderPlaced, setOrderPLaced] = useState(false);

    const handlePlaceOrder = () => {
        setCArt([]);
        setOrderPLaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        console.log("Remove clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCArt(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCArt(cartProduct);
    }, []);

    let thankYou;
     if(orderPlaced){
         thankYou = <img src={happyImage} alt=""/>
     }
    return (
        <div className="twin-container">
           
          <div className="product-container">
          {
                cart.map(pd =>  <ReviewItem
                    key={pd.key}
                    removeProduct= {removeProduct}
                    product={pd}></ReviewItem>)
           }
           {
               thankYou
           }
          </div>
          <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">Pleace Order</button>
                </Cart>
          </div>
        </div>
    );
};

export default Review;