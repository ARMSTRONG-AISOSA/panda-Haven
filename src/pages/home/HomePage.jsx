import React from 'react';
import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/heroSection/HeroSection';
import OurProjects from './sections/ourProjects/OurProjects';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        headTxt="Welcome to Panda Haven"
        subHeadTxt="Join us in protecting our gentle giants and their natural habitats."
        classHidden=""
      />

      <div className='container'>
        <OurProjects />
      </div>
    </div>
  )
}

export default HomePage
