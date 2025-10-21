import React, { use, useState, useEffect } from 'react';
import AllApp from './AllApp';
import NoAppsFound from '../NoAppsFound/NoAppsFound';
import './appSpinner.css';

const AllApps = ({ allAppsHere }) => {

  const allAppsData = use(allAppsHere);
  const [searchApp, setSearchApp] = useState('');
  const [loading, setLoading] = useState(false); 

  const [searchedApps, setSearchedApps] = useState(allAppsData);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filtered = allAppsData.filter(app =>
        app.title.toLowerCase().includes(searchApp.toLowerCase())
      );
      setSearchedApps(filtered);
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [searchApp, allAppsData]);

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
        {loading ? (


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

          
        ) : searchedApps.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
  {searchedApps.map((appsData) => (
    <AllApp key={appsData.id} appsData={appsData} />
  ))}
</div>

        ) : (
          <NoAppsFound resetSearch={resetSearch}></NoAppsFound>
        )}
      </div>

    </div>
  );
};

export default AllApps;
