import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './popUp.css';
import { IoIosMailOpen } from 'react-icons/io';
import Button from '../button/Button';

const PopUp = () => {
    const location = useLocation();
    // const [showPopup, setShowPopup] = useState(false);
    const [showPopup, setShowPopup] = useState(true);


    // useEffect(() => {
    //     const excludedPaths = ["/login", "/signup"];
    //     const interval = setInterval(() => {
    //         if (!excludedPaths.includes(location.pathname)) {
    //             setShowPopup(true);
    //             setTimeout(() => setShowPopup(false), 5000); // Show popup for 5 seconds
    //         }
    //     }, 12000); // 1 minute interval

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, [location]);


    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        showPopup && (
            <div className='popUpSection'>
                <div className="popup">
                    <div className="popup-content">
                        <div className='popUpIconDiv'>
                            <IoIosMailOpen className='pUIcon' />
                        </div>

                        <h3 className=''>Subscribe Newsletter</h3>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        {/* <p>Current Location: {location.pathname}</p> */}

                        <div className='subscribeForm'>
                            <input
                                className='subscribeInput'
                                type="email"
                                placeholder='Subscribe NewsLetter'
                            />

                            <Button
                                className='subscribeBtn'
                                type="submit"
                                label="Send"
                                variant="sec"
                            // onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default PopUp;
