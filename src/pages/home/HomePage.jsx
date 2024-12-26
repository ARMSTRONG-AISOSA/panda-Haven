import React from 'react';
import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/heroSection/HeroSection';
import OurProjects from './sections/ourProjects/OurProjects';
import WhoWeAre from './sections/whoWeAre/WhoWeAre';
import OurMission from './sections/ourMission/OurMission';
import HowWeWork from './sections/howWeWork/HowWeWork';

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
        <WhoWeAre />
        <OurMission />
        <HowWeWork />
      </div>
    </div>
  )
}

export default HomePage
