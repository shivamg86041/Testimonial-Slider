import React, { useState } from 'react';
import Cards from './Cards.js';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className='w-full md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-5 md:p-10 transition-all duration-700 hover:shadow-xl'>
      <Cards review={reviews[index]} />

      <div className='flex justify-center text-2xl mt-10 md:text-3xl gap-3 text-violet-400 font-bold'>
        <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronRight />
        </button>
      </div>

      <div className='mt-4 md:mt-6'>
        <button
          onClick={surpriseHandler}
          className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg md:text-lg'
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
