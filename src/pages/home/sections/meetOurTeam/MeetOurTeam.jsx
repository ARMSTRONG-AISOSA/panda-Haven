import React from 'react';
import './meetOurTeam.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { teamData } from '../../../../data/data';
import { DiVim } from 'react-icons/di';

// Icons
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const MeetOurTeam = () => {

  // Slider settings
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Slide change speed .5 sec
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll by 1 card
    autoplay: true,
    autoplaySpeed: 30000,
    responsive: [
      {
        breakpoint: 1024,  // Adjust settings for larger screens 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        },
      },
      {
        breakpoint: 768,  // Adjust settings for medium screens 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        },
      },
      {
        breakpoint: 580,  // Adjust settings for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <div className='mOTSection'>
      <h2 className='centerTitleUnderline'>Meet Our Team</h2>
      <Slider {...settings}>
        {teamData.map((tData) => (
          <div className='mOTCard' key={tData.id}>

            {/* Img */}
            <div className='mOTImgDiv'>
              {/* alt={`${comFeedback.fullName}'s feedback`} */}
              <img
                className='mOTImg'
                src={tData.profileImg}
                alt={`${tData.fullName} Profile Image`} />
            </div>

            {/* Name */}
            <div className='mOTName' >
              <h5>{tData.fullName}</h5>
            </div>

            {/* Job Title */}
            <div className='mOTJobTitle'>
              <p>{tData.jobTitle}</p>
            </div>

            {/* Social Handles */}
            <div className='mOTIconDiv'>
              <a href={`${tData.facebook}`} target='_blank' rel='noopener noreferrer' ><FaFacebookF /></a>
              <a href={`${tData.linkedIn}`} target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
              <a href={`${tData.instagram}`} target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MeetOurTeam;
