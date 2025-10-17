import React from 'react';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'




const NineApps = ({apps}) => {
    
    return (
            
                <div className=' w-[300px] p-4 rounded-md shadow-2xl'>

                <img className='mx-auto rounded-md mb-2 w-[300px]' src={apps.image} alt="" />

                <p className='font-semibold text-center text-xl mb-2'>{apps.title}</p>

                <div className='flex justify-between'>
                    <div className='flex gap-1 items-center bg-[#f1f5e8] px-2 py-1 rounded-xl'><img className='h-[20px]' src={download} alt="" /><p className='text-[#00d390] font-bold'>{apps.downloads}M</p></div>
                    <div className='flex gap-1 items-center bg-[#fff0e1] px-2 py-1 rounded-xl'><img className='h-[20px]' src={rating} alt="" /><p className='text-[#ff8811] font-bold'>{apps.ratingAvg}</p></div>
                </div>

                </div>

            
          
        
    );
};

export default NineApps;