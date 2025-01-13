import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './popUp.css';
import { IoMdCloseCircleOutline, IoIosMailOpen } from 'react-icons/io';
import Button from '../button/Button';

const PopUp = () => {
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);

    // useEffect hook is used to set up an interval to show the pop-up at regular intervals and cleans up after itself.
    useEffect(() => {
        const excludedPaths = ["/login", "/signup"];

        const interval = setInterval(() => {
            // If the current path is not in the excluded list, the pop-up is shown (true).
            // If the current path is not in the excluded list, the pop-up is shown (true).
            if (!excludedPaths.includes(location.pathname)) {
                setShowPopup(true);
            }

        }, 400000); // 4 min interval

        return () => clearInterval(interval);
    }, [location]
        // [location]:This array tells React to re-run the useEffect block whenever the location object changes (i.e user navigates to a different route).
    )

    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        showPopup && (
            <div 
            className='popUpSection'
            onClick={closePopup}
            >
                <div className="popup">
                    <div className="popup-content">

                        <div className='closeIconDiv'>
                            <IoMdCloseCircleOutline
                                className='popUpCloseIcon'
                                onClick={closePopup}
                            />
                        </div>

                        <div className='popUpIconDiv'>
                            <IoIosMailOpen className='pUIcon' />

                            <h3 className=''>Subscribe Newsletter</h3>
                        </div>

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
