import React from 'react';
import './footer.css';
import { logo } from '../../assets/images/images';
import { Link } from 'react-router-dom';// Icons
import { FaYoutube, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footerSection'>
      <div className='footerTop' >
        <div className='fTLeftSide'>
          <Link to="/">
            <img className='logo' src={logo} alt="logo" />
          </Link>
          <p>PANDA HAVEN
            <br />-<br />
            1250 24th Street, N.W.
            Washington, DC 20037</p>
        </div>

        <div className='fTRightSide'>
          <p>Our Socials</p>

          {/* Icons */}
          <div className='footerIcons'>
            <a href="https://www.youtube.com/" target='_blank' rel='noopener noreferrer' ><FaYoutube /></a>
            <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer' ><FaFacebookF /></a>
            <a href="https://www.linkedin.com/" target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/" target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
          </div>
        </div>
      </div>


      <div className='footerBottom' >
        <p>© 2022 Panda Haven. All rights reserved.</p>
        <p>
          <Link to="/contactus" >Contact Us</Link> | <Link to="#" >Privacy Policy</Link> | <Link to="#" >Terms of Service</Link>
        </p>
      </div>
    </div>
  )
}

export default Footer;
