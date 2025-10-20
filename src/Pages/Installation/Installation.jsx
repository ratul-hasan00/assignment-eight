import React from 'react';

import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { useLoaderData, useParams } from 'react-router';


const Installation = () => {
  const { id } = useParams();
  const appId = id ? parseInt(id) : null;
  
  const appData = useLoaderData() || []; 
  const singleApp = appId ? appData.find(app => app.id === appId) : null;

  if (!singleApp) {
    return (
      <div className="bg-[#d9d9d980] min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-[#001931] font-bold text-3xl sm:text-4xl md:text-5xl mb-2 text-center pt-10 sm:pt-12">Your Installed Apps</h1>
        <p className="text-[#627382] opacity-70 text-center text-sm sm:text-base md:text-lg mb-10">No apps installed yet.</p>
      </div>
        );
    }

  const { title, downloads, image, ratingAvg, size } = singleApp;

  return (
    <div className='bg-[#d9d9d980]'>
        <div>
            <h1 className='text-[#001931] font-bold text-3xl sm:text-3xl md:text-3xl lg:text-4xl mb-2 pt-10 text-center'>Your Installed Apps</h1>
            <p className='text-[#627382] opacity-70 text-sm sm:text-base md:text-lg lg:text-xl mb-10 text-center'>Explore All Trending Apps on the Market developed by us</p>
        </div>


    <div className='pb-10'>
        <div className='flex flex-col sm:flex-row justify-between items-center bg-white max-w-[1200px] mx-auto p-2 sm:p-3 md:p-4 rounded-2xl shadow-xs'>
            <div className='flex flex-col sm:flex-row gap-5 sm:gap-10 items-center sm:items-start'>
            <img className='w-[70px] sm:w-[90px] rounded-3xl shadow-md' src={image} alt="installed app" />
        <div className='text-center sm:text-left'>
        <h1 className='text-xl sm:text-2xl font-bold mb-2'>{title}</h1>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center sm:justify-start'>
          <p className='text-[#00d390] font-semibold flex gap-2 items-center text-sm sm:text-base'><img className='h-[16px] sm:h-[20px]' src={download} alt="" />{downloads}M</p>
          <p className='text-[#ff8811] font-semibold flex gap-2 items-center text-sm sm:text-base'><img className='h-[16px] sm:h-[20px]' src={rating} alt="" />{ratingAvg}</p>
          <p className='text-[#627382] font-semibold text-sm sm:text-base'>{size} MB</p>
        </div>
      </div>
    </div>
    <div className='mt-4 sm:mt-0'>
      <button className='btn bg-[#00d390] text-white border-none rounded-lg px-5 sm:px-7 py-2 sm:py-3'>Uninstall</button>
    </div>
  </div>
</div>

            
        </div>
  );
};

export default Installation;