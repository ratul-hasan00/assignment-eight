import React, { Suspense } from 'react';
import AllApps from './AllApps';


const fetchCard = async () => {
  const res = await fetch("/appsThirtyData.json")
  return res.json()
}
const allAppsHere = fetchCard();


const Apps = () => {
    return (
        <div className='my-10'>
            <h1 className='text-[#001931] font-bold text-4xl mb-2 text-center'>Our All Applications</h1>
            <p className='text-[#627382] opacity-70 mb-10 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <Suspense fallback={<span className='text-5xl mx-auto font-bold'>LOADING</span>}>
                <AllApps allAppsHere={allAppsHere}></AllApps>
            </Suspense>
            
        </div>
    );
};

export default Apps;