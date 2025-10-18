import React, { use } from 'react';
import AllApp from './AllApp';

const AllApps = ({allAppsHere}) => {

    const allAppsData = use(allAppsHere);
    return (
        <div>
              <div className='flex justify-around'>
                <p className='text-2xl font-semibold'>({allAppsData.length}) Apps Found</p>
                <p className='text-2xl font-semibold'>({allAppsData.length}) Apps Found</p>
            </div>

        <div className='max-w-1250 mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {
                allAppsData.map((appsData)=> <AllApp key={appsData} appsData={appsData}></AllApp> )
            }
        </div>
        </div>
         
       
        </div>
          
    );
};

export default AllApps;