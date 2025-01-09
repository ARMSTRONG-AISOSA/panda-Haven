import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { MdArrowDropDown, MdArrowDropUp, MdOutlineMenuOpen } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { blankProfile, logo } from '../../assets/images/images';
import Button from '../button/Button';


const Navbar = () => {

    // State Management
    const [profileDd, setProfileDd] = useState(false); // Profile Dropdown
    const [showDropdown, setShowDropDown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    //  Functions
    // Arr. function Toggle Profile Dropdown Visibility
    const toggleProfileDd = () => setProfileDd(!profileDd);

    // Toggle Dropdown
    const toggleDropdown = () => {
        setShowDropDown(!showDropdown)
    };

    // Toggle Menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fix
    // Close Menue on Background Click
    const closeMenu = (e) => {
        if (e.target.classList.contains('navLinkscon')) {
            setMenuOpen(false);
            // setMenuOpen(!menuOpen);
        }
    }

    return (
        <div className='navbar'>
            {/* Logo */}
            <div className='logoSection'>
                <Link to="/">
                    <img className='logo' src={logo} alt="logo" />
                </Link>
                <span className='logoName'>Panda Haven</span>
            </div>

            {/* Menun for Mobile */}
            <div
                className='mobileMenuIcons'
                onClick={toggleMenu}
            >
                {menuOpen ? <MdOutlineMenuOpen className='menuIcon' /> : <IoMenuSharp className='menuIcon' />}
            </div>

            <div
                className={`navLinksCon slideIn ${menuOpen ? "" : "hide"}`}
                // Fix
                onClick={closeMenu}
            >
                <div className='navlinks'>
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About Us</Link>

                    {/* Dropdown Trigger*/}
                    <div className='dropdown' >
                        <Link
                            to="#"
                            onClick={toggleDropdown}
                            className="dropdownLink"
                        >Get Involved <span className='drpIconSpan'>{!showDropdown ? <MdArrowDropDown className='dropdownIcon' /> : <MdArrowDropUp className='dropdownIcon' />}</span></Link>

                        {/* Dropdown Content */}
                        {showDropdown && (
                            <div className="dropdownContainer slideIn">
                                <div className='dropdownContent'>
                                    <Link to="/advocacy">Advocacy</Link>
                                    <Link to="/comingsoon">Comingsoon</Link>
                                    <Link to="/donate">Donate</Link>
                                    <Link to="/eduresources">Eduresources</Link>
                                    <Link to="/contactus">Contact Us</Link>
                                </div>
                                <div className='dropdownContent' >
                                    <Link to="/joinus">Joinus</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/projects">Projects</Link>
                                    <Link to="/shop">Shop</Link>
                                    <Link to="/signup">Signup</Link>
                                    <Link to="/volunteer">Volunteer</Link>
                                </div>
                            </div>

                        )}
                    </div>

                    <Link to="/blog">Blog</Link>
                </div>
            </div>

            {/* Profile Section */}
            <div className='profileSection'>
                <div className='profileInfo' onClick={toggleProfileDd}>
                    <img src={blankProfile} className='avatar' alt="user Avatar" />
                    <span className='username'>John Doe</span>
                </div>

                {/* Profile Dropdown Menu */}
                {profileDd && (
                    <div className={`profileDd ${profileDd ? "slideIn" : ""}`}>
                        <a href="#" className="profileDdItem">Profile</a>
                        <a href="#" className="profileDdItem">Settings</a>

                        <Button
                            className="profileDdItem logoutButton"
                            label="Logout"
                            variant="sec"
                            onClick={() => alert('Logout Btn Clicked')}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
