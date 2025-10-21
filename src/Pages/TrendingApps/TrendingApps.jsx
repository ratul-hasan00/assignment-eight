import React, { Suspense } from 'react';
import TrendingApp from './TrendingApp';
import { Link } from 'react-router';
import './trendingSpinner.css';


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
            <Suspense fallback={
                
                <div className="flex flex-col justify-center items-center h-40">
    <p className="text-2xl font-bold text-[#632ee3] tracking-widest flex items-center">
      L
      <span className="inline-block animate-slow-spin mx-1">
        <svg
          className="w-6 h-6 text-[#632ee3]"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
          ></path>
        </svg>
      </span>
      ADING
    </p>
    <p className="text-sm text-gray-500 mt-2">Please wait, searching apps...</p>
  </div>
                
                }>
            <TrendingApp trendingApps={trendingApps}></TrendingApp>
            <div className='max-w-[1250px] mx-auto flex justify-center items-center mt-10'>
                <Link to = '/apps'><button className='btn px-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white'>Show All</button></Link>
            </div>
            </Suspense>
            
        </div>
    );
};

export default TrendingApps;