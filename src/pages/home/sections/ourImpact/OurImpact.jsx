import React from 'react';
import './ourImpact.css';
import Button from '../../../../components/button/Button';
import { impactData } from '../../../../data/data';

const OurImpact = () => {
    return (
        <div className='oISection'>
            <div className='leftIS'>
                <div>
                    <h2 className='titleUnderline'>
                        Our Impact
                    </h2>
                </div>

                <div className='oILeftContent'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>

                <div className='impactBtnDiv'>
                    <Button
                        className='iDonateBtn impactBtn'
                        label="Donate Now"
                        variant="tert"
                        onClick={() => alert('Donate Now Btn Clicked')}
                    />
                    <Button
                        className='impactBtn'
                        label="Learn More"
                        variant="sec"
                        onClick={() => alert('Learn More Btn Clicked')}
                    />
                </div>
            </div>

            <div className='rightIS'>
                {impactData.map((data) => (
                    <div className='rISContent' key={data.id}>
                        <h3>{data.info}</h3>
                        <h3>{data.number}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default OurImpact;
