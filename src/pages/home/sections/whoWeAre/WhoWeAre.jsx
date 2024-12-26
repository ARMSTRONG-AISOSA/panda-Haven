import React from 'react';
import './whoWeAre.css';
import BiSection from '../../../../components/biSection/BiSection';
import { cardImg } from '../../../../assets/images/images';

const WhoWeAre = () => {
    return (
        <BiSection

            flexClass="flexSection"
            h2Content="Who We Are"
            pContent1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            pContent2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            btnContent="Learn More"
            imgName={cardImg}
        />
    )
}

export default WhoWeAre
