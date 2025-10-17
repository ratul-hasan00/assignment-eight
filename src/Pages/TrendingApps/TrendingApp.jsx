import React, { use } from 'react';
import NineApps from './NineApps';

const TrendingApp = ({trendingApps}) => {
    // if(!trendingApps || trendingApps.length === 0){
    //        return <p className="text-center text-[#627382] mt-4 mb-4">Loading apps...</p>;
    // }
    const appsData = use(trendingApps);
    console.log(appsData);
    return (
       <div className='max-w-1250 mx-auto'>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {
                appsData.map((apps)=><NineApps key={apps.id} apps={apps}></NineApps>)
            }
        </div>
       </div>
    );
};

export default TrendingApp;