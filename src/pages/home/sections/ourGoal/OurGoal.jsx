import React from 'react';
import './ourGoal.css';
import { TbTargetArrow } from "react-icons/tb";
import { ourGoals } from '../../../../data/data';

const OurGoal = () => {
    return (
        <div className='oGSection'>
            <h2 className='titleUnderline'>Our Goals</h2>

            <div className='goalBox'>
                {ourGoals.map((ourGoal) => (
                    <div key={ourGoal.id} className='goals'>
                        <div className='gIconDiv'>
                            <TbTargetArrow className='goalIcon'
                            />
                        </div>
                        
                        <p>{ourGoal.goal}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurGoal;
