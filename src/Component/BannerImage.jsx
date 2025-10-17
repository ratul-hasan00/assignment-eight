import React from 'react';
import heropng from '../assets/hero.png'

const BannerImage = () => {
    return (
        <div>
            <img className='mx-auto' src={heropng} alt="" />
        </div>
    );
};

export default BannerImage;