import React from 'react';
import './communityFeedback.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { communityFeedback } from '../../../../data/data';

const CommunityFeedback = () => {

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
        <div className='cFSection'>
            <h2 className='centerTitleUnderline'>Community Feedback</h2>

            {/* {...settings} : the syntax is the spread operator. It passes all the properties defined in the settings object as individual props to the <Slider> component. */}
            <Slider className='slider' {...settings}>
                {communityFeedback.map((comFeedback) => (
                    <div className='cFCard' key={comFeedback.id}>
                        <div className='cFCardP'>
                            <p>{comFeedback.feedback}</p>
                        </div>
                        <div className='cFImgDiv'>
                            <img className='cFImg' src={comFeedback.img} alt="profile img" />
                        </div>
                        <div>
                            <p><b>{comFeedback.fullName}</b></p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CommunityFeedback;
