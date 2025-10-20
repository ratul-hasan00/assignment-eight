import React from 'react';
import appError from '../../assets/App-Error.png';


const NoAppsFound = ({resetSearch}) => {
    return (

<div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
  
  <img className="mx-auto mb-5 w-40 sm:w-48 md:w-56 lg:w-64 max-w-full" src={appError} alt="App Not Found" />

  <h1 className="text-[#001931] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 px-2 sm:px-0">OPPS!! APP NOT FOUND</h1>
  <p className="text-[#627382] opacity-70 text-xs sm:text-sm md:text-base lg:text-lg mb-5 px-2 sm:px-0">The App you are requesting is not found on our system. Please try another app.</p>

 
  <button onClick={resetSearch} className="btn border-none px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded text-xs sm:text-sm md:text-base lg:text-base">Go Back!</button>
 
  

</div>


    );
};

export default NoAppsFound;