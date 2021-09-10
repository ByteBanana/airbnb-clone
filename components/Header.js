import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-4 bg-white shadow-md p-5 md:px-10 select-none'>
      <div className='relative flex items-centers h-8 cursor-pointer my-auto'>
        <Image
          src='/airbnb-logo.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div className='flex items-center md:border-2 rounded-full py-2 px-2 md:shadow-sm col-span-2'>
        <input
          type='text'
          placeholder='Start your search'
          className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>
      <div className='flex space-x-2 items-center justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6' />
        <div className='flex border rounded-full p-2 hover:bg-gray-500 hover:text-white'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='hidden sm:inline h-6' />
        </div>
      </div>
    </header>
  );
};

export default Header;
