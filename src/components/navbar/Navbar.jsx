import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { blankProfile, logo } from '../../assets/images/images';


const Navbar = () => {

    // States
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);

    // Toggle Dropdown Visibility
    // function dec. using the arrow func. syntax
    const toggleDropdown = () => setIsDropDownOpen(!isDropdownOpen);

    return (
        <div className='navbar'>
            {/* Logo */}
            <div className='logoSection'>
                <img className='logo' src={logo} alt="logo" />
                <span>Panda Haven</span>
            </div>

            <div className='navlinks'>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link >Get Involved</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contactus">Contact Us</Link>
                {/* <Link to="/advocacy">Advocacy</Link>
                <Link to="/comingsoon">Comingsoon</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/eduresources">Eduresources</Link>
                <Link to="/joinus">Joinus</Link>
                <Link to="/login">Login</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/volunteer">Volunteer</Link> */}
            </div>

            {/* Profile Section */}
            <div className='profileSection'>
                <div className='profileInfo' onClick={toggleDropdown}>
                    <img src={blankProfile} className='avatar' alt="user Avatar" />
                    <span className='username'>John Doe</span>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div className={`dropdownMenu ${isDropdownOpen ? "slideIn" : "slideOut"}`}>
                        <a href="#" className="dropdownItem">Profile</a>
                        <a href="#" className="dropdownItem">Settings</a>
                        <button className="dropdownItem logoutButton">Logout</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
