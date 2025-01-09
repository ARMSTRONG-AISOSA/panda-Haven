import React from 'react';
import './shop.css';
import Navbar from '../../components/navbar/Navbar';
import ComingSoon from "../comingSoon/ComingSoon";
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        headTxt="Shop with Us"
        subHeadTxt="Neque porro quisquam est qui doloNeque porro quisquam est qui doloNeque porro quisquam est qui dolo."
        classHidden="hidden"
      />


      <ComingSoon />

      <div className='container'>
      <Footer />
      </div>
    </div>
  )
}

export default Shop
