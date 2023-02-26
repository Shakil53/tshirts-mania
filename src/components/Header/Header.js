import React from 'react';
import { Link } from
    'react-router-dom';
import './Home.css';

const Header = () => {
    return (
        <nav className='nav-items'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/orders'>Orders</Link>

        </nav>
    );
};

export default Header;