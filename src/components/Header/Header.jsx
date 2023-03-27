import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
                    <a href="/order">Order</a>
                    <a href="/order-Review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/login">LogIn</a>
           </div>
        </nav>
    );
};

export default Header;