import React from 'react';
import './ourProjects.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";

// Sample card data
const cards = [
    {
        id: 1,
        title: "Panda Conservation",
        description: "Learn how we are saving pandas and their habitats.",
        image: "https://placeimg.com/300/200/nature",
        postDate: "06-Dec-2024",
        content: "Lorem",
    },
    {
        id: 2,
        title: "Volunteer Programs",
        description: "Join our volunteer programs to make a difference.",
        image: "https://placeimg.com/300/200/people",
        postDate: "12-Nov-2024",
        content: "Lorem",
    },
    {
        id: 3,
        title: "Wildlife Education",
        description: "Educating the next generation about wildlife.",
        image: "https://placeimg.com/300/200/animals",
        postDate: "03-Sep-2024",
        content: "Lorem",
    },
    {
        id: 4,
        title: "Adopt a Panda",
        description: "Support pandas by adopting and sponsoring them.",
        image: "https://placeimg.com/300/200/tech",
        postDate: "30-Jun-2024",
        content: "Lorem",
    },
];



const OurProjects = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards visible at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Tablet and smaller
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // Mobile devices
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
        </div>
    )
}

export default OurProjects;
