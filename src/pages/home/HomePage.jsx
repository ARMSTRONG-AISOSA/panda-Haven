import React from 'react';
import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import HeroSection from '../../components/heroSection/HeroSection';
import OurProjects from './sections/ourProjects/OurProjects';
import WhoWeAre from './sections/whoWeAre/WhoWeAre';
import OurMission from './sections/ourMission/OurMission';
import HowWeWork from './sections/howWeWork/HowWeWork';
import OurGoal from './sections/ourGoal/OurGoal';
import OurImpact from './sections/ourImpact/OurImpact';
import CommunityFeedback from './sections/communityFeedback/CommunityFeedback';
import UpcomingEvents from './sections/upcomingEvents/UpcomingEvents';
import MeetOurTeam from './sections/meetOurTeam/MeetOurTeam';
import Footer from '../../components/footer/Footer';
import NewsLetter from '../../components/newsLetter/NewsLetter';
import ContactUs from './sections/contactUs/ContactUs';
import Register from '../../components/register/Register';

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
        <OurGoal />
        <OurImpact />
        <CommunityFeedback />
        <UpcomingEvents />
        <MeetOurTeam />
        <ContactUs />
        <Register />
        <NewsLetter />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage;