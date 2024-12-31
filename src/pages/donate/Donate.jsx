import React from 'react';
import './donate.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Donate = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Donate Page</h1>
        <Footer />
      </div>
    </div>
  )
}

export default Donate
