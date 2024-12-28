import React from 'react';
import './upcomingEvents.css';
import { MdOutlineDateRange } from "react-icons/md";
import { eventData } from '../../../../data/data';

const UpcomingEvents = () => {
    return (
        <div className='uESection'>
            <div className='uELeft'>
                <h3>Upcoming Events</h3>
            </div>

            <div className='uERight'>

                {eventData.map((eData) => (
                    <div className='uERight1' key={eData.id}>
                        <div className='dataIcon'>
                            <MdOutlineDateRange />
                        </div>

                        <div className='eventClass'>
                            <h4>{eData.eventTitle}</h4>
                            <p>“{eData.eventInfo}"</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default UpcomingEvents
