import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Calendar, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = ({ placeHolder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const searchChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInputHandler = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setNoOfGuests(1);
    setSearchInput('');
  };

  const navigateHomeHandler = () => {
    router.push('/');
  };

  const searchClickHandler = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <>
      <header className='sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md select-none md:px-10'>
        {/* Left */}
        <div
          className='relative flex h-8 my-auto cursor-pointer items-centers'
          onClick={navigateHomeHandler}
        >
          <Image
            src='/airbnb-logo.png'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>

        {/* Middle */}
        <div className='flex items-center px-2 py-2 rounded-full md:border-2 md:shadow-sm'>
          <input
            type='text'
            value={searchInput}
            placeholder={placeHolder || 'Start your search'}
            className='flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none'
            onChange={searchChangeHandler}
          />
          <SearchIcon className='hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex md:mx-2' />
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-2 text-gray-500'>
          <p className='hidden cursor-pointer md:inline'>Become a host</p>
          <GlobeAltIcon className='h-6' />
          <div className='flex p-2 border rounded-full hover:bg-gray-500 hover:text-white'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='hidden h-6 sm:inline' />
          </div>
        </div>

        {searchInput && (
          <div className='flex flex-col col-span-3 mx-auto'>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
            />
            <div className='flex items-center mb-4 border-b'>
              <h2 className='flex-grow text-2xl font-semibold'>
                Number of Guests
              </h2>
              <UsersIcon className='h-5' />
              <input
                type='number'
                inputMode='numeric'
                className='w-12 pl-2 text-lg text-red-400 outline-none'
                defaultValue='0'
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                min='1'
              />
            </div>
            <div className='flex'>
              <button
                className='flex-grow p-2 text-gray-400 transition duration-150 rounded-full hover:text-white hover:bg-gray-400 hover:shadow-md active:scale-105'
                onClick={resetInputHandler}
              >
                Cancel
              </button>
              <button
                className='flex-grow p-2 text-red-400 transition duration-150 rounded-full hover:text-white hover:bg-red-400 hover:shadow-md active:scale-105'
                onClick={searchClickHandler}
              >
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
