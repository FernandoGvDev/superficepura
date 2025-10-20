import React from 'react';
import Hero from './Hero';
import FeatureCards from './FeatureCards';
import DiagonalSection from './DiagonalSection';
import ImageCarousel from './ImageCarousel';

const Home: React.FC = () => {
  return (
    <section className='bg-gray-950'>
    <Hero />
    <FeatureCards />
    <DiagonalSection />
    <ImageCarousel />
    </section>
  );
}

export default Home;