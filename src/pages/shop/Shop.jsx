import React from 'react';
import './shop.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>Shop Page</h1>
        <Footer />
      </div>
    </div>
  )
}

export default Shop
