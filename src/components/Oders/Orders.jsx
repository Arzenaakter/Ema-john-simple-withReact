import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItems/ReviewItem';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart,setCart] = useState(saveCart);
    const handleRemoveFromCart = (id)=>{
       const remaining = cart.filter(product =>product.id !== id);
       setCart(remaining);
       removeFromDb(id)
    }
    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart()
    }
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className='review-container'>
            
            {
                cart.map(product => <ReviewItem
                  key={product.id}
                  product ={product}
                  handleRemoveFromCart={handleRemoveFromCart}

                ></ReviewItem>)
            }

            </div>
            <div className='cart-container'>
   
               <Cart cart={cart}
               handleClearCart={handleClearCart}
               >
                <Link to='/checkout' className='link-procced'>
                <button className='btn-procced'>
                    Procces checkout
                    <FontAwesomeIcon className='' icon={faArrowRight} />
                    </button>
                </Link>
               </Cart>

            </div>
            
        </div>
    );
};

export default Orders;