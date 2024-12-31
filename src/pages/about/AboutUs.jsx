import React from 'react';
import './aboutUs.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>About Us</h1>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs;
