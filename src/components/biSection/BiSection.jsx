import React from 'react';
import './biSection.css';
import Button from '../../components/button/Button';

const BiSection = ({ pContent1, pContent2, h2Content, btnContent, imgName, flexClass }) => {
    return (
        <div className={`${flexClass} flexSection`}>
            <div className='leftSide'>
                <img className='leftSideImg' src={imgName} alt="img" />
            </div>
            <div className='rightSide'>
                <div>
                    <h2 className='titleUnderline'>
                        {h2Content}
                    </h2>
                </div>

                <div className='rigthContent'>
                    <p>{pContent1}</p>
                    <p>{pContent2}</p>
                </div>

                <div>

                    <Button
                        className='whoWeAreBtn'
                        label={btnContent}
                        variant="sec"
                        onClick={() => alert('Who we are Btn Clicked')}
                    />
                </div>
            </div>
        </div>
    )
}

export default BiSection;
