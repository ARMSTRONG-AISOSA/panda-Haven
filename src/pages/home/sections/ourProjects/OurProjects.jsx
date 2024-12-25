import React from 'react';
import './ourProjects.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from '../../../../data/data';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


const OurProjects = () => {
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
                breakpoint: 480,  // Adjust settings for small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <div className="our-projects-container">
            <h2 className="sectionTitle">Our Programs</h2>
            <Slider {...settings}>
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <div className="card-content">
                            <p className="postedOn"><b>posted on:</b> <i>{card.postDate}</i></p>
                            <h3 className="cardTitle">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                            <a href='#' className='arrowIcon'>
                                <FaArrowCircleRight className='FaArrowCircleRight' />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OurProjects;
