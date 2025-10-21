import React, { use } from 'react';
import NineApps from './NineApps';

const TrendingApp = ({trendingApps}) => {
    const appsData = use(trendingApps);

    return (
       <div className='max-w-[1250px] mx-auto'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
    {appsData.map((apps) => (
      <NineApps key={apps.id} apps={apps} />
    ))}
  </div>
</div>

    );
};

export default TrendingApp;