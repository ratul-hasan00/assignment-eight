import React, { use, useState } from 'react';
import AllApp from './AllApp';
import NoAppsFound from '../NoAppsFound/NoAppsFound';

const AllApps = ({allAppsHere}) => {

    const allAppsData = use(allAppsHere);
    // changed 
    const [searchApp, setSearchApp] = useState(''); 
    // changed
    const searchedApps = allAppsData.filter(app =>
    app.title.toLowerCase().includes(searchApp.toLowerCase()));

    const resetSearch = () => setSearchApp('');


    return (
        <div className='max-w-[1250px] mx-auto'>

            <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-4 mb-10 px-4 sm:px-6 lg:px-8">

                <p className="text-lg sm:text-xl font-semibold text-center sm:text-left w-full sm:w-auto">
    ({searchedApps.length}) Apps Found
                </p>

                <label className="relative w-full sm:w-64">
    <svg 
      className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    <input 
      type="search" 
      required 
      value={searchApp}
      onChange={(e) => setSearchApp(e.target.value)}
      placeholder="Search" 
      className="w-full pl-10 pr-3 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#632ee3] focus:border-transparent text-sm sm:text-base"
    />
                </label>

            </div>



            <div>
                {
                    searchedApps.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                    {searchedApps.map((appsData)=> <AllApp key={appsData.id} appsData={appsData}></AllApp> )}
                        </div>
                    ) : (<NoAppsFound resetSearch={resetSearch}></NoAppsFound>)
                }
                
            </div>
         
        </div>
          
    );
};

export default AllApps;