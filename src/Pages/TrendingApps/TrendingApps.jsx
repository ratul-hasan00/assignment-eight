import React, { Suspense } from 'react';
import TrendingApp from './TrendingApp';


const fetchCard = async () => {
  const res = await fetch("/appsNineData.json")
  return res.json()
}
const trendingApps = fetchCard();

const TrendingApps = () => {
    // const [trendingApps, setTrendingApps] = useState([]);
    // useEffect(()=>{
    //     fetch('appsNineData.json')
    //     .then(res=>res.json())
    //     .then(data =>{
    //         setTrendingApps(data)
    //     })
    // },[])
   
    return (
        <div className='my-10'>
            <h1 className='text-[#001931] font-bold text-4xl mb-2 text-center'>Trending Apps</h1>
            <p className='text-[#627382] opacity-70 mb-2 text-center'>Explore All Trending Apps on the Market developed by us</p>
            {/* <TrendingApp trendingApps={trendingApps}></TrendingApp> */}
            <Suspense fallback={<span className='text-5xl mx-auto font-bold'>LOADING</span>}>
            <TrendingApp trendingApps={trendingApps}></TrendingApp>

            </Suspense>
        </div>
    );
};

export default TrendingApps;