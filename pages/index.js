import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from 'components/SmallCard';
import MediumCard from 'components/MediumCard';
import LargeCard from 'components/LargeCard';

export default function Home(props) {
  const { explorerData, cardsData } = props;

  return (
    <div className=''>
      <Head>
        <title>Airbnb clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16 md:px-24 xl:px-32'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explorer near by</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {explorerData.map((item) => (
              <SmallCard
                key={item.img}
                image={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3'>
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} title={title} image={img} />
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspried '
        />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const explorerData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      explorerData,
      cardsData,
    },
  };
};
