import React, { Suspense } from 'react';
import TrendingApp from './TrendingApp';
import { Link } from 'react-router';


const fetchCard = async () => {
  const res = await fetch("/appsNineData.json")
  return res.json()
}
const trendingApps = fetchCard();

const TrendingApps = () => {
   
    return (
        <div className='my-10'>
            <h1 className='text-[#001931] font-bold text-4xl mb-2 text-center'>Trending Apps</h1>
            <p className='text-[#627382] opacity-70 mb-10 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<span className='text-5xl mx-auto font-bold'>LOADING</span>}>
            <TrendingApp trendingApps={trendingApps}></TrendingApp>
            <div className='max-w-[1250px] mx-auto flex justify-center items-center mt-10'>
                <Link to = '/apps'><button className='btn px-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white'>Show All</button></Link>
            </div>
            </Suspense>
            
        </div>
    );
};

export default TrendingApps;