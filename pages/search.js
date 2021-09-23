import Footer from 'components/Footer';
import Header from 'components/Header';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { format } from 'date-fns';
import InfoCard from 'components/InfoCard';
import Map from 'components/Map';

const Search = ({ searchResults }) => {
  let range;
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  try {
    const formattedStartDate = format(new Date(startDate), 'dd MMM yy');
    const formattedEndDate = format(new Date(endDate), 'dd MMM yy');
    range = `${formattedStartDate} - ${formattedEndDate}`;
  } catch (e) {
    router.replace('/');
  }

  return (
    <div className='h-screen'>
      <Header placeHolder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className='flex'>
        <section className='flex-grow px-6 overflow-y-scroll pt-14'>
          <p className='text-xs'>
            300+ Stay {range} for {noOfGuests} number of guests
          </p>

          <h1 className='mt-2 mb-6 text-3xl font-semibold'>
            Stays in {location}
          </h1>

          <div className='hidden my-4 space-x-3 lg:inline-flex whitespace-nowrap'>
            <button className='button'>Cancellation Flexibility</button>
            <button className='button'>Type of price</button>
            <button className='button'>Price</button>
            <button className='button'>Rooms and Beds</button>
            <button className='button'>More filters</button>
          </div>

          <div className={'flex flex-col'}>
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className='hidden xl:inline-flex xl:min-w-[400px] max-h-[100%]'>
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};

export default Search;
