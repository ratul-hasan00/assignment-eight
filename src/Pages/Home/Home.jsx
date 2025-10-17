import React from 'react';
import Banner from '../../Component/Banner';
import BannerImage from '../../Component/BannerImage';
import Stats from '../../Component/Stats';
import TrendingApps from '../TrendingApps/TrendingApps';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerImage></BannerImage>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
            
        </div>
    );
};

export default Home;