import React from 'react';
import './stats.css'

const Stats = () => {
    return (
        <div className='stats-div bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white  p-10'>
            <p className='stats-title font-bold text-4xl text-center pb-10'>Trusted by Millions, Built for You</p>

            <div className='stats-rate flex justify-evenly'>

            <div className='text-center space-y-2'>
                <p className='opacity-50'>Total Downloads</p>
                <p className='text-6xl font-bold'>29.6M</p>
                <p className='opacity-50'>21% more than last month</p>
            </div>

            <div className='text-center space-y-2'>
                <p className='opacity-50'>Total Reviews</p>
                <p className='text-6xl font-bold'>906k</p>
                <p className='opacity-50'>46% more than last month</p>
            </div>

            <div className='text-center space-y-2'>
                <p className='opacity-50'>Active Apps</p>
                <p className='text-6xl font-bold'>132+</p>
                <p className='opacity-50'>31 More Will Launce</p>
            </div>

            </div>
            
            
        </div>
    );
};

export default Stats;