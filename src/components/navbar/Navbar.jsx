import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { logo } from '../../assets/images/images';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Logo */}
            <div>
                <img className='logo' src={logo} alt="logo" />
                <span>Panda Haven</span></div>

            <div className='navlinks'>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/advocacy">Advocacy</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/comingsoon">Comingsoon</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/eduresources">Eduresources</Link>
                <Link to="/joinus">Joinus</Link>
                <Link to="/login">Login</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/volunteer">Volunteer</Link>
            </div>
        </div>
    )
}

export default Navbar
