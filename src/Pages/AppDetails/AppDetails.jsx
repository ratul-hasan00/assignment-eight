import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import like from '../../assets/icon-review.png';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    const appId =parseInt(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app =>app.id === appId);
    const {title,companyName,image,downloads,ratingAvg,size,reviews,description} = singleApp;
    return (
        <div>
            <div className='flex items-center gap-10 mt-10 mb-10 max-w-[1250px] mx-auto border-b-1 border-gray-200 pb-10'>
            <div>
            <img className='w-[300px] rounded-xl' src={image} alt="" />
            </div>

            <div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='font-semibold mb-5 border-b-1 border-gray-200 pb-4'>Developed by<span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'> {companyName}</span></p>
            <div className='flex justify-between gap-10 items-center mb-5'>
                <div><img src={download} alt="" /><p className='font-semibold'>Downloads</p><h1 className='text-2xl font-bold'><span>{downloads}</span>M</h1></div>
                <div><img src={rating} alt="" /><p className='font-semibold'>Average Ratings</p><h1 className='text-2xl font-bold'>{ratingAvg}</h1></div>
                <div><img src={like} alt="" /><p className='font-semibold'>Total Reviews</p><h1 className='text-2xl font-bold'>{reviews}K</h1></div>
            </div>
            <button className='btn bg-[#00d390] text-white font-semibold py-auto border-none rounded'>Install Now ({size}MB)</button>
            </div>
        </div>

        <div className='max-w-[1250px] mx-auto'> 
            <h1 className='text-2xl font-bold mb-5'>Description</h1>
            <p className='mb-10 text-[#627382]'>{description}</p>
        </div>
        </div>
    );
};

export default AppDetails;