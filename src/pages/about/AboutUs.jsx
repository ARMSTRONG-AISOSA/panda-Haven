import React from 'react';
import './aboutUs.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/HeroSection';
import WhoWeAre from '../home/sections/whoWeAre/WhoWeAre';
import OurMission from '../home/sections/ourMission/OurMission';
import HowWeWork from '../home/sections/howWeWork/HowWeWork';
import OurGoal from '../home/sections/ourGoal/OurGoal';
import MeetOurTeam from '../home/sections/meetOurTeam/MeetOurTeam';
import Register from '../../components/register/Register';
import NewsLetter from '../../components/newsLetter/NewsLetter';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        headTxt="ABOUT US"
        subHeadTxt="Neque porro quisquam est qui doloNeque porro quisquam est qui doloNeque porro quisquam est qui dolo"
        classHidden="hidden"
      />

      <div className='container'>
        <WhoWeAre />
        <OurMission />
        <HowWeWork />
        <OurGoal />
        <MeetOurTeam />
        <Register />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs;
