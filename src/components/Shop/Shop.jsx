import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => { 
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))

     }, []);
     useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
           if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct)
            // console.log(addedProduct);
           }
        }
        setCart(savedCart);
        
     }
        ,[products])
     const HandleAddtoCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
       addToDb(product.id);
    }


    const handleClearCart = ()=>{
       setCart([]);
       deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
            
                {products.map(product => <Product
                key={product.id}
                product={product}
                HandleAddtoCart={HandleAddtoCart}
                ></Product>)}

            </div>
            <div className='cart-container'>
               <Cart
                cart={cart}
                handleClearCart={handleClearCart}
                >

                    <Link  to='/orders' className='link-procced'>
                        <button className='btn-procced'>
                            Review Order
                            <FontAwesomeIcon className='' icon={faArrowRight} />
                        </button>
                     </Link>
                </Cart>
               

            </div>
            
        </div>
    );
};

export default Shop;