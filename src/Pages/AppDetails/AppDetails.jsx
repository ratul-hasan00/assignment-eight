import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import like from '../../assets/icon-review.png';
import { Link, useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    const {id} = useParams();
    const appId =parseInt(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app =>app.id === appId);
    const {title,companyName,image,downloads,ratingAvg,size,reviews,description,ratings} = singleApp;
    
    console.log(singleApp);
    return (
    <div>
            {/* app details  */}
        
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mt-10 mb-10 max-w-[1250px] mx-auto border-b border-gray-200 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <img className="w-full max-w-[300px] rounded-xl mx-auto md:mx-0" src={image} alt="" />
            </div>

        <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>
              <p className="font-semibold mb-4 sm:mb-5 border-b border-gray-200 pb-2 sm:pb-4">Developed by <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">{` ${companyName}`}</span></p>
          <div className="flex flex-col sm:flex-row justify-around md:justify-start gap-4 sm:gap-10 mb-5 text-center md:text-left">

            <div>
              <img src={download} alt="" className="mx-auto md:mx-0 mb-1" />
              <p className="font-semibold text-sm">Downloads</p>
              <h1 className="text-xl sm:text-2xl font-bold"><span>{downloads}</span>M</h1>
            </div>
            <div>
              <img src={rating} alt="" className="mx-auto md:mx-0 mb-1" />
              <p className="font-semibold text-sm">Average Ratings</p>
              <h1 className="text-xl sm:text-2xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img src={like} alt="" className="mx-auto md:mx-0 mb-1" />
              <p className="font-semibold text-sm">Total Reviews</p>
              <h1 className="text-xl sm:text-2xl font-bold">{reviews}K</h1>
            </div>
          </div>
          <Link to = {`/installation/${singleApp.id}`}>
            <button className="btn bg-[#00d390] text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 border-none rounded">Install Now ({size}MB)</button>          
          </Link>
          
        </div>
      </div>

        

        {/* barchart  */}

        <div className='max-w-[1250px] mx-auto mb-10 border-b-1 border-gray-200 pb-10 sm:px-6 lg:px-8'>
            {/* <h1 className='text-2xl font-bold mb-5'>Ratings</h1> */}
            <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-5 text-[#001931] text-center sm:text-left">Ratings</h1>


            <div className='w-full' style={{ width: '100%', height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
              <BarChart  data={ratings} layout='vertical' >
              <XAxis type='number' axisLine={false} tickLine={false}></XAxis>
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false}></YAxis>
              <Tooltip></Tooltip>
              <Bar dataKey="count" fill="orange" barSize={25} ></Bar>
              </BarChart>
              </ResponsiveContainer>
            </div>
        </div>

        {/* app description  */}

        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-5 text-[#001931] text-center sm:text-left">Description</h1>
          <p className="mb-6 sm:mb-10 text-[#627382] text-sm sm:text-base leading-relaxed text-justify sm:text-left">{description}</p>
        </div>

    </div>
    );
};

export default AppDetails;