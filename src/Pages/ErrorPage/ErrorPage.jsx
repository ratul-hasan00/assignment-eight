import React from 'react';
import pageNotFound from '../../assets/error-404.png';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mb-5' src={pageNotFound} alt="" />
            <p className='text-[#001931] font-bold text-4xl mb-2'>Oops, page not found!</p>
            <p className='text-[#627382] opacity-70 mb-2'>The page you are looking for is not available.</p>
            <button className='btn border-none px-10 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white'>Go Back!</button>
        </div>
    );
};

export default ErrorPage;