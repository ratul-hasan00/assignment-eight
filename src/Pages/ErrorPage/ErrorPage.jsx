import React from 'react';
import pageNotFound from '../../assets/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
<div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
  <img 
    className="mx-auto mb-5 w-48 sm:w-64 md:w-72 lg:w-80 max-w-full" 
    src={pageNotFound} 
    alt="Page Not Found" 
  />
  
  <p className="text-[#001931] font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
    Oops, page not found!
  </p>
  
  <p className="text-[#627382] opacity-70 text-sm sm:text-base md:text-lg mb-5 px-2 sm:px-0">
    The page you are looking for is not available.
  </p>
  
  <Link to ='/' >
  <button className="btn border-none px-6 sm:px-10 py-2 sm:py-3 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white rounded text-sm sm:text-base">
    Go Back!
  </button>
  </Link>
  
</div>


    );
};

export default ErrorPage;