import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div
      className='relative h-[120px] sm:h-[300px] lg:h-[400] xl:h-[500px]
    2xl:h-[600px]'
    >
      <Image src='/hero.jpeg' layout='fill' objectFit='cover' />
      <div className='absolute top-1/2 w-full text-center'>
        <h1 className='text-sm sm:text-lg'>Not sure where to go? Perfect.</h1>
        <button className='rounded-full bg-white px-10 py-4 shadow-mg text-purple-500 font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
