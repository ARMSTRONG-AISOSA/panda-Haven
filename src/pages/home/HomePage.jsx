import React from 'react';
import './homePage.css';
import Navbar from '../../components/navbar/Navbar';
import { heroImg } from '../../assets/images/images';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* HeroSection */}
      <div className='heroSection'>
        <div className='heroContent'>
          <h1 className="heroTitle" >Welcome to Panda Haven</h1>
          <p className="heroSubtitle" >Join us in protecting our gentle giants and their natural habitats.</p>

          <div>
            <input className='heroSearch' type="text" placeholder='Join Our NewsLetter ' />
          </div>

          <div className='heroBtns'>
            <button className="btn primary-btn">Donate</button>
            <button className="btn secondary-btn">Subscribe</button>
          </div>
        </div>

      </div>
      <div className='container'>

      </div>
    </div>
  )
}

export default HomePage
