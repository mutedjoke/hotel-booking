import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
const navigate = useNavigate();

  return (
    // <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
    //     <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
    //         {roomsDummyData.slice(0,4).map((room,index)=>(
    //             <HotelCard key={room.id} room={room} index={index} />
    //         ))}
    //     </div>
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//         <Title title='Featured Destination' subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experience.'/>
//   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>
//     {roomsDummyData.slice(0, 4).map((room, index) => (
//       <HotelCard key={room.id} room={room} index={index} />
//     ))}
//   </div>
// </div>
<div className='flex flex-col items-center px-6 md:px-16 lg:px-24  bg-gray-200 py-20'>
  <div className="text-center max-w-3xl">
    <Title 
      title='Featured Destinations' 
      subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.' 
    />
  </div>
  
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>
    {roomsDummyData.slice(0, 4).map((room, index) => (
      <HotelCard key={room.id} room={room} index={index} />
    ))}
  </div>
  <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
    View All Destinations
  </button>
</div>


  )
}

export default FeaturedDestination