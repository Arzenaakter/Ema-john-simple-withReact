import './Cart.css';
// import React, { children } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    // console.log(props.cart[0]);
    // const {cart} = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
       totalPrice = totalPrice + product.price * product.quantity;
       totalShipping = totalShipping + product.shipping;
       quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7 /100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
             <h4>Order summary</h4>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: {totalPrice} </p>
                <p>Total Shipping: {totalShipping} </p>
                <p>Tax: {tax.toFixed(2)}</p>
                <h6>Grand Total: {grandTotal.toFixed(2)} </h6>
                <button className='btn-clear-cart' onClick={handleClearCart} >
                    <span>Clear Cart</span>
                <FontAwesomeIcon className='' icon={faTrashAlt} />

               
               
                </button>
                {children}

            
        </div>
    );
};

export default Cart;