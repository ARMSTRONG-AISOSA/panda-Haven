import React from 'react';
import './heroSection.css';
import Button from '../button/Button';

const HeroSection = ({ headTxt, subHeadTxt, classHidden }) => {
    return (
        <div className='heroSection'>
            <div className='heroContent'>
                <h1 className="heroTitle" >{headTxt}</h1>
                <p className="heroSubtitle" >{subHeadTxt}</p>

                <div 
                className={`${classHidden}`}
                >
                    <input className='heroSearch' type="text" placeholder='Join Our NewsLetter ' />
                </div>

                <div 
                className={`heroBtns ${classHidden}`}
                >
                    <Button label="Donate" variant="pry" onClick={() => alert('Donate Btn Clicked')} />
                    <Button label="Subscribe" variant="sec" onClick={() => alert('Subscribe Btn Clicked')} />

                </div>
            </div>

        </div>
    )
}

export default HeroSection;
