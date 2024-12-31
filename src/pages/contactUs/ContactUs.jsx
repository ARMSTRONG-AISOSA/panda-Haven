import React from 'react';
import './contactUs.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='container'>
          <h1>Contact Us</h1>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
