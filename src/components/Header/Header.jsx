import './Header.css'
import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
                
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders </Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/login">LogIn</Link>
           </div>
        </nav>
    );
};

export default Header;