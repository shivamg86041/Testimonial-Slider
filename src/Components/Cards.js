import React from 'react';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';
const Card = ({ review }) => {

  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  return (
    <div className='relative flex flex-col md:relative'>
      <div className='md:absolute top-[-7rem] z-[10] mx-auto'>
        <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image} alt="missing" />
        {isMobile ?   <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] left-1/2 transform -translate-x-1/2 md:hidden z-[-20]'></div>: <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] z-[-20] left-[10px]'></div>}
      </div>
      <div className='text-center mt-5'>
        <p className='tracking-wider font-bold text-2xl capitalize md:text-xl'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm md:text-xs'>{review.job}</p>
      </div>

      <div className='text-violet-400 mx-auto mt-3 md:mt-5'>{<FaQuoteLeft />}</div>

      <div className='text-center mt-3 md:mt-4 text-slate-500'>{review.text}</div>

      <div className='text-violet-400 mx-auto mt-3 md:mt-5'>{<FaQuoteRight />}</div>

      
    </div>
  );
};

export default Card;
