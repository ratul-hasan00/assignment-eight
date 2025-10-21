import React from 'react';
import playstore from '../assets/playStore.png'
import appstore from '../assets/appStore.png'

const Banner = () => {
    return (
        <div className="hero">
  <div className="hero-content text-center my-10">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-[#001931]">We Build<br/><span className='text-[#9f62f2]'>Productive</span> Apps</h1>
      <p className="py-6 text-[#627382]">
        At HERO.IO , we craft innovative apps designed 
        to make everyday life simpler, smarter, and more exciting.
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <a href="https://play.google.com/store" target="_blank"><button className="btn border-none bg-[#d9d9d980] font-semibold m-2 rounded-xl"><img className='w-[20px]' src={playstore} alt="" />Google Play</button></a>
      <a href="https://www.apple.com/app-store/" target="_blank" ><button className="btn border-none bg-[#d9d9d980] font-semibold m-2 px-6 rounded-xl"><img className='w-[20px]' src={appstore} alt="" />App Store</button></a>  
    </div>
  </div>
</div>
    );
};

export default Banner;